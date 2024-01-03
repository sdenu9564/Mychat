import { useContext } from "react";
import { Box, Dialog, Typography,List,ListItem,styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import {GoogleLogin} from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import { AccountContext } from "../../context/accountProvider";

const Component = styled(Box)`
    display :flex;
`
const Title = styled(Typography)`
    font-size :26px;
    color: #525252;
    font-weight:300;
    font-family: inherit;
    margin-bottom:25px;
`
const Container = styled(Box)`
    padding:56px 0 56px 56px;
`
const StyledList = styled(List)`
    & > li {
        padding:0;
        margin-top: 15px;
        font-size:16px;
        line-height:28px;
        color: #4a4a4a;
    }
`
const QrCode = styled('img')({
    height:264,
    width: 264,
    margin:'50px 0 0 50px'
})
const dailogStyle = {
    height : '96%',
    marginTop :'12%',
    width :'50%',
    maxWidth :'100%',
    MaxHeight :'100%',
    boxShadow : 'none',
    overFlow : 'hidden'
}

const LoginDailog =()=> {
    const {setAccount} = useContext(AccountContext);
    const onLoginSuccess = (res) => {
        const decode = jwtDecode(res.credential);
        console.log(decode);
        setAccount(decode);
    }
    const onLoginError = () =>{

    }
    return(
        <Dialog open ={true} PaperProps={{sx : dailogStyle}} hideBackdrop={true}>
            <Component>
                <Container>
                    <Title>To use WhatsApp on your own computer :</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your Phone</ListItem>
                        <ListItem>2. Tap Menu settings and select whatsapp Web</ListItem>
                        <ListItem>Point you phone to the screen to capture the code</ListItem>

                    </StyledList>
                </Container>
                <Box style={{position: 'relative'}}>
                    <QrCode src ={qrCodeImage} alt="qr code images"/>
                    <Box style={{position: 'absolute', top:'50%', transform: 'translate',marginLeft:'80px'}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}/>
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDailog;