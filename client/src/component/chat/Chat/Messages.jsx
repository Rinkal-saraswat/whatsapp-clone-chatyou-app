import { useContext ,useEffect,useState,useRef } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { getMessages, newMessage } from '../../../service/api';

import {Box,styled} from '@mui/material';
import Footer from './Footer'; 
import Message from './Message';

const Component=styled(Box)`
  height:75vh;                       {/*height of chat background 75vh */}
 overflow-y:scroll;

`;
const Container =styled(Box)`
padding: 3px 80px;



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
          const scrollRef=useRef();          

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
     useEffect(()=>{
          scrollRef.current?.scrollIntoView({behaviour: 'smooth'})   /*...it is for to chat scrollbar initially at bottom*/
     },[messages])
           //OR
     // useEffect(()=>{
     //     if(scrollRef.current){
     //           scrollRef.current.scrollTop=scrollref.current.scrollHeight;
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
               messages && messages.map((message,index)=>(
                    <Container /*ref={scrollref}*/ key={index} ref={index === messages.length - 1 ? scrollRef : null} >   {/*  ref={scrollref } is used when scrollbar wants on bottom*/ }
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
