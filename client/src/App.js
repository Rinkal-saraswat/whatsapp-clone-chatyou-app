// import logo from './logo.svg';
 //import './App.css';
 import { GlobalStyles } from '@mui/material';
import Messenger from "./component/messenger";
import AccountProvider from "./context/AccountProvider";

import { GoogleOAuthProvider } from '@react-oauth/google';
//import Logindialog from "./component/account/logindialog";
function App() {
  const clientId='1032549961307-ors6ghcff0p8hictjs949h4oigaok45t.apps.googleusercontent.com';
  return (
    
   
    
    <GoogleOAuthProvider clientId={clientId}>
      {/* i used this to mkae my messages scrollbar in bottom , iuse material ui component and it gives me position relative css to override this i used this global css for material ui for this personal class to specific this and it makes my page well good   */}
       <GlobalStyles styles={{
      '.MuiDialog-paper': {
        position: 'static !important'
      }
    }} />
      <AccountProvider>

      < Messenger />
      </AccountProvider>
     
      
    </GoogleOAuthProvider>
  );
}

export default App;
