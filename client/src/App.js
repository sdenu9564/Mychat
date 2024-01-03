
import Messanger from "./component/Messanger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/accountProvider";
function App() {
  const clientId = ''
  return (
   <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
      <Messanger/>
    </AccountProvider>
    
   </GoogleOAuthProvider>
  );
}

export default App;
