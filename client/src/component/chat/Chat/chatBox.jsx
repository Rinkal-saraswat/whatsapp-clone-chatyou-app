
import { Box } from "@mui/material";
import { useContext, useEffect ,useState} from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api";

//components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatBox=()=>{
   const {  person, account } = useContext(AccountContext);
   const [conversation,setCoversation]=useState({});
   

   useEffect(()=>{
   const getConversationDetail=async()=>{
      let data=await getConversation({senderId: account.sub , receiverId:person.sub})
      // console.log(data);
      setCoversation(data);
   }
   getConversationDetail();
   },[person.sub]);


   
   return(
<Box style={{height:'75%' }}>
  <ChatHeader  person={person} />
  <Messages  person={person} conversation={conversation}/>


</Box>


   )
}

export default ChatBox;