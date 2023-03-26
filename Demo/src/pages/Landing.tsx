import {Container, styled} from "@mui/material";
import {images} from "../constants/index";
import ChatBox from "../components/ChatBox";

const PageContainer = (styled('div'))({
    height: '100vh',
    width: '100vw',

    backgroundImage: `url(${images.Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',

    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column-reverse',
});

const ChatBoxContainer = (styled('div'))({
    width: '45%'
})


const Landing = () => {
    return (
        <PageContainer>
            <ChatBoxContainer>
                <ChatBox/>
            </ChatBoxContainer>
            {/*    logo of wss*/}
        </PageContainer>
    );
}

export default Landing;