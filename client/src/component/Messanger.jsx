import { useContext } from "react";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import LoginDailog from "./account/LoginDailog";
import ChatDialog from "./chat/chatDialog";
import { AccountContext } from "../context/accountProvider";

const Container = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const Header = styled(AppBar)`
  height: 125px;
  background-color: #00A884;
  box-shadow: none;
`;
const Messanger = () => {
  const { account } = useContext(AccountContext);
  console.log(account,'-----------------------')

  return (
    <Container>
      {account ? (
        <>
        <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
       
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDailog />
        </>
      )}
    </Container>
  );
};

export default Messanger;
