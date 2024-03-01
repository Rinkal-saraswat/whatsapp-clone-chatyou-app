
import {AppBar,Toolbar,styled,Box} from '@mui/material';
import{ useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import Logindialog from './account/logindialog';
import ChatDialog from './chat/chatdialog';

const Header =styled(AppBar)`
height:120px;
 background-color:#00ABB4 ;
 box-shadow:none;
`

const LoginHeader =styled(AppBar)`
height:150px;
 background-color:#00bfa5;
 box-shadow:none;
`
const Component=styled(Box)`
 height:100vh;
 background:#DCDCDC;
`

const Messenger = () => {
    
    const{account}= useContext(AccountContext);

    return (
    <Component>{
        account ?
        <>
         <Header >
           <Toolbar>

            </Toolbar>
        </Header>
        
        <ChatDialog/>
    </>
     : 
        <>
        <LoginHeader >
            <Toolbar>

            </Toolbar>
        </LoginHeader>
       <Logindialog/></>
       }
    </Component>
    )
}
export default Messenger;