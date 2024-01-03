
import Messanger from "./component/Messanger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/accountProvider";
function App() {
  const clientId = '164153058455-ck8ba5t3gg0ro5uqj7biu84el2r6qm50.apps.googleusercontent.com'
  return (
   <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
      <Messanger/>
    </AccountProvider>
    
   </GoogleOAuthProvider>
  );
}

export default App;
