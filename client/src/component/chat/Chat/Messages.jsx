import { useContext ,useEffect,useState } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { getMessages, newMessage } from '../../../service/api';

import {Box,styled} from '@mui/material';
import Footer from './Footer'; 
import Message from './Message';

const Component=styled(Box)`
  height:75vh;                       {/*height of chat background*/}
 overflow-y:scroll;

`;
const Container =styled(Box)`
padding: 2px 80px;

`;

const Wrapper=styled(Box)`
background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
background-size:50%;

`;

const Messages =({person,conversation})=>{
     
          const[value,setValue]=useState('');
          const [messages,setMessages]=useState([]);
        
          const [file,setFile]=useState();
          const [image,setImage]=useState('');
          const[incomingMessage,setIncomingMessage]=useState(null);
          // const scrollref=useRef();          

         const {account,socket, newMessageFlag,setNewMessageFlag}=useContext(AccountContext);
          useEffect(()=>{
               socket.current.on('getMessage',data=>{
                    setIncomingMessage({
                         ...data,
                         createdAt:Date.now()
                    })
               })
          },[])
         useEffect(()=>{
          const getMessageDetails=async()=>{
               let data=await getMessages(conversation._id);
               // console.log(data);
               setMessages(data);
          }
           conversation._id && getMessageDetails();
     },[person.id,conversation._id,newMessageFlag]);      
     //react hoook effect either include conversation._id or remove depemdcy array..mtlb khali hone pr nhi chalega....video ka khali hone pr hi chl rha hai
     // y ek conversation id dega netwrok m like 62b3ed234ds...
      //const scrollRef=useRef();   
     // useEffect(()=>{
     //      scrollRef.current?.scrollIntoView({transition: 'smooth'})   /*...it is for to chat scrollbar initially at bottom*/
     // },[messages])
           //OR
     // useEffect(()=>{
     //     if(scrollref.current){
     //           scrollRef.current.scrollTop=scrollRef.current.scrollHeight;
     //     } 
     // },[messages])

     useEffect(()=>{
         incomingMessage && conversation?.members?.includes(incomingMessage.senderId)&&
         setMessages(prev=>[...prev,incomingMessage]) 
     },[incomingMessage,conversation]);



      const sendText=async(e)=>{
          //console.log(e);
         const code=e.keyCode||e.which;
         if(code===13){
          let message={};
          if(!file){
           message={
               senderId:account.sub,
               receiverId:person.sub,
               conversationId:conversation._id,
               type:'text',
               text:value
          }
     }
     else{
           message={
               senderId:account.sub,
               receiverId:person.sub,
               conversationId:conversation._id,
               type:'file',
               text:image
          }  
     }

     socket.current.emit('sendMessage',message);


         // console.log(message);
          await newMessage(message);
          setValue('');
          setFile('');
          setImage('');
          setNewMessageFlag(prev=>!prev)
         }
 }

     return (
      <Wrapper >

      <Component>

          {
               messages && messages.map(message=>(
                    <Container  > 
                         <Message message={message}  />
                         </Container>
              
               ))
          }
      </Component>
      <Footer 
      sendText={sendText}
       setValue={setValue} 
       value={value} 
       file={file} 
       setFile={setFile}
       setImage={setImage}
       />
      </Wrapper>

     )
}

export  default Messages;
