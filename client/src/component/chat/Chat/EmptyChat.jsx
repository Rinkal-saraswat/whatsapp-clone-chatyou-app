import { Box, Typography ,styled} from "@mui/material";
import { emptyChatImage } from "../../../constants/data"; 
import { Lock } from "@mui/icons-material"; 

const Component=styled(Box)`
background:#FFFFFF;     {/* F0F8FF*/}
padding :30px 0;
text-align:center;
height:100vh;
`;
const Container=styled(Box)`
padding :0 200px;

`; 
const Image=styled('img')({
width:400,
marginTop:60
})
const Title=styled(Typography)`
font-size:32px;
margin:20px 0 5px 0;
font-family:inherit;
font-weight:100;
color:#41525d;
`;
const Subtitle=styled(Typography)`
 font-size:14px;
 font-weight:400;
 font-family:inherit; 

`;
const Encrypt=styled(Typography)`
font-size:12px;
padding: 20px 0 10px 0;
display:flex;
justify-content:center;
& :first-of-type{
  padding:10px;
}
`;
const EmptyChat=()=>{

    return (

  <Component>
      <Container>
        <Image src={emptyChatImage} alt="imaged"/>
        <Title>WhatsApp Web</Title>
        <Subtitle>Send and receive messages without keeping your phone online.
        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </Subtitle>
        <Encrypt>
        <Lock/>

        <Typography> End-to-end encrypted</Typography>
        </Encrypt>
        
      </Container>
</Component>

  
    )
}
export default EmptyChat;