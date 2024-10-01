
import { Dialog,Box ,Typography, ListItem,styled,List} from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import {useContext} from 'react';
import { AccountContext } from "../../context/AccountProvider";

import { addUser } from "../../service/api";
const dialogstyle={
    height:'96%',
    
    marginTop:'13%',
    width:'70%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden',
}
const Component=styled(Box)`
display:flex;

`;
const Container=styled(Box)`
 padding : 56px 0 56px 56px;
`;
const Qrcode=styled('img')({
    height:250,
    width:250,
    margin : '50px 0px 0px 90px',
})

const StyledList=styled(List)`&>li{
 margin-top:15px;
 padding:0;
 font-size:18px;
 color:#4a4a4a;
}
`
const Title=styled(Typography)`
 font-size:26px;
 font-weight:300;
 color:#525252;
 font-family:inherit;
 margin-bottom:25px;
`
const Logindialog=()=>{
   const {setAccount}=useContext(AccountContext);

    const onLoginSuccess=async (res)=>{
     const decoded=jwt_decode(res.credential);
     console.log(decoded);
     setAccount(decoded);
      await addUser(decoded); 
    }
    const onLoginError=(res)=>{
      console.log('login fail',res);
    }
    return (
        <Dialog open={true} PaperProps={{sx:dialogstyle}} hideBackdrop={true}>  
         
         <Component>
            <Container>
             <Title> To use whatsApp on Your Computer :</Title>
             <StyledList>
             <ListItem>1.Open Your WhatsApp</ListItem>
            
             <ListItem>2.Tap on Menu and select Linked devices</ListItem>
             <ListItem>3. Tap on Link the device</ListItem>
             <ListItem>4. Point your phone to capture the code</ListItem>
             </StyledList>
            
            </Container>
            <Box style={{position:'relative'}}>
           <Qrcode src={qrCodeImage} alt="qrCode" />
           <Box style={{ position:'absolute', top:'50%', transform : 'translatex(75%)'}}>
              <GoogleLogin
               onSuccess={onLoginSuccess}
               onError={onLoginError}
              
              
              />
           </Box>
            </Box>
         </Component>
        </Dialog>
    )
}
export default Logindialog;