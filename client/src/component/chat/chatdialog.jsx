import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { Dialog,Box,styled } from "@mui/material";


//components
import ChatBox from "./Chat/chatBox";
import Menu from './menu/menu';
import EmptyChat from "./Chat/EmptyChat";
const dialogstyle={
    height:'95%',
    margin:'20px',
    width:'100%',
    borderRadius:0,
    maxWidth:'100%',
    maxHeight:'100%',  
    boxShadow:'none',
    overflow:'hidden',
}
const Component =styled(Box)`
  display:flex;

 `;
 const LeftComponent=styled(Box)`
  min-width:450px;
 `
 const RightComponent=styled(Box)`
   min-width:350px;
   width:75%;
   height:100%;
   border-left :1px solid rgba(0,0,9,0.14); 
 `
const ChatDialog=()=>{

 const {person} =useContext(AccountContext);





    return (
        <Dialog
          open={true}
          PaperProps={{sx:dialogstyle}} hideBackdrop={true}
          maxwidth={'md'}
        >

        <Component>
            <LeftComponent>
                  <Menu/>
            </LeftComponent>
            <RightComponent>
            
              {Object.keys(person).length ? <ChatBox/>:<EmptyChat/>}



            </RightComponent>
        </Component>



        </Dialog>
    )
}
export default ChatDialog;