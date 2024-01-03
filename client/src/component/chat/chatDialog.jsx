import { Box, Dialog,styled } from "@mui/material";
import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";

const Component = styled(Box)`
    display : flex;
`;

const LeftComponent = styled(Box)`
    min-width: 450px;

`;

const RightComponent = styled(Box)`
    width : 73%;
    min-width: 300px;
    heighr:100%;
    border-left:1px solid rgba(0,0,0,0.14);
`;


const dailogStyle = {
    height : '95%',
    // marginTop :'12%',
    width :'100%',
    margin:'20px',
    borderRadius: 0,
    maxWidth :'100%',
    MaxHeight :'100%',
    boxShadow : 'none',
    overFlow : 'hidden'
}


const ChatDialog = () =>{
    return(
        <Dialog open ={true} PaperProps={{sx : dailogStyle}} hideBackdrop={true} maxWidth={'md'}>
            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    <EmptyChat/>
                </RightComponent>
            </Component>
        </Dialog>
    )
}

export default ChatDialog;