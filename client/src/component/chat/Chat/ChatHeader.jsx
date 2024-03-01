import { useContext } from 'react';
import {Box,Typography,styled} from '@mui/material';
import { Search,MoreVert } from '@mui/icons-material';
import { AccountContext } from '../../../context/AccountProvider';
import { defaultProfilePicture } from '../../../constants/data';

const Header=styled(Box)`
height:44px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center;

`;
const Image=styled('img')({
    height:40,
    width:40,
    objectFit:'cover',
    borderRadius:'50%'
});

const Name=styled(Typography)`
  margin-left:12px !important;

`;

const Status=styled(Typography)`
  margin-left:12px !important;
  font-size:11px;
  color:rgb(0,0,0,0.6);
`;

  
const RightConatiner=styled(Box)`
  margin-left:auto;
  & > svg {
    padding:8px;
    font-size:22px;
     color: #000;
  }
`;

const ChatHeader=({person})=>{

  const{activeUsers}=useContext(AccountContext);


    return (
  <Header>
   {/* <div>Hello from chat header</div> */}
   <Image src={person.picture} alt="dp" />
   <Box>
    <Name>{person.name}</Name>
    <Status>{activeUsers?.find(user=>user.sub===person.sub)?'online':'offline'}</Status>
    </Box>
    <RightConatiner>
      <Search/>
      <MoreVert/>
    </RightConatiner>
   </Header>
  )
}

export default ChatHeader;