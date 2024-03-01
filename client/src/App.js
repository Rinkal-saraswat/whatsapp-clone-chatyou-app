// import logo from './logo.svg';
// import './App.css';

import Messenger from "./component/messenger";
import AccountProvider from "./context/AccountProvider";

import { GoogleOAuthProvider } from '@react-oauth/google';
//import Logindialog from "./component/account/logindialog";
function App() {
  const clientId='1032549961307-ors6ghcff0p8hictjs949h4oigaok45t.apps.googleusercontent.com';
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>

      < Messenger />
      </AccountProvider>
     
      
    </GoogleOAuthProvider>
  );
}

export default App;
