import { useContext } from "react";

import { Box ,Typography,styled} from "@mui/material";
import { ModeEditOutline } from "@mui/icons-material";
import { AccountContext } from "../../context/AccountProvider";

const ImageContainer=styled(Box)`
 display:flex;
 justify-content:center;
`;

const Image=styled('img')({
    width:200,
    height:200,
    borderRadius:'50%',
    padding: '25px 0'
})

const BoxWrapper=styled(Box)`
 background:#FFFFFF;
 padding:12px 30px 1px;
 box-shadow:0 1px 3px rgba(0,0,0,0.08); 
 & :first-of-type{
    color:#009688;
    font-size:13px;
    font-weight:200; 
 }
 & :last-child{
   margin :10px 0;
   color:#4A4A4A;
   display:flex;
   margin-left:auto;
 }
 `;
 const DescriptionContainer=styled(Box)`
 padding :10px 20px 28px 30px;
 & >p{
   font-size:13px;
   
   color:#8696a0;
 }
 `
// const Types= styled(Typography)`
// color:#009688;
// font-size:13px;
// font-weight:200;
// `
 

const Profile=()=>{
    const {account}=useContext(AccountContext);

   return(
 <>
 
 <ImageContainer>
<Image src={account.picture} alt="dp" />
 </ImageContainer>
 <BoxWrapper>
    <Typography>Your Name</Typography>
    <Typography>{account.name}
    <ModeEditOutline/>
    
    </Typography>

 </BoxWrapper>

 <DescriptionContainer>
<Typography>This is not your username . it will show to your Whatsapp contact.</Typography>
</DescriptionContainer>
<BoxWrapper>
<Typography>About Me</Typography>
<Typography>
   Eat! Sleep! code! Repeat!
   <ModeEditOutline/>
    
</Typography>

</BoxWrapper>


</>
 

   )
}
export default Profile;