import {TextField, styled, InputAdornment, Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import Message from "./Message";
import {useState} from "react";

///*******************************************
// chat box styles

const ChatBoxContainer = (styled('div'))({
    borderRadius: '10px',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    marginBottom: '3rem',
    direction: 'rtl',
    display: 'flex',
    flexDirection: 'column-reverse'
});

const ChatTextField = (styled(TextField))({
    opacity: '1',
    direction: 'rtl',
    paddingBottom: '1rem',
    marginBottom: '1rem',
    height: '100%',

    //     set opacity for placeholder text
    '&::placeholder': {
        opacity: '1',
    }
    //     change color of placeholder underline
})

const UserChatArea = (styled('div'))(
    {
        display: 'flex',
        justifyContent: 'space-between'
    }
)


const SendButton = (styled(Button))(
    {
        height: '63px',
        marginRight: '1rem',
        borderRadius: '50%',
    }
)

///*******************************************


const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    return (
        <ChatBoxContainer>
            <UserChatArea>

                {/*     text area for user to type questions*/}
                <ChatTextField variant={'filled'} fullWidth
                               placeholder={'اینجا سوالت رو برام بنویس'}
                               InputProps={{
                                   startAdornment:
                                       <InputAdornment position={'end'}>
                                           <SearchIcon sx={{fontSize: '40px', color:'#28286c'}}/>
                                       </InputAdornment>,
                                   style:
                                       {
                                           fontSize: '20px',
                                           color: 'white'
                                       }
                               }
                               }
                />


                {/*    add button to send text field content*/}
                <SendButton
                    variant={'contained'}
                    color={'primary'}
                    onClick={() => {

                    }
                    }
                >
                    {/*    add send icon to button*/}
                    <SendIcon sx={{
                        transform: 'rotate(180deg)'
                    }}/>
                </SendButton>
            </UserChatArea>

            {/*message container with overlay for showing chat history*/}
            <div style={
                {
                    overflow: 'scroll',
                    height: '650px',
                    padding: '1rem'
                }
            }>

            <Message text={
                'من اینجا یک سوال مطرح می‌کنم.'
            } isUser={true}  isLoading={false}/>

            <Message text={'در اینجا پاسخ بات ما رو مشاهده می‌کنید مثلا'} isUser={false} isLoading={true}/>
            {/*    */}
            {/*<Message text={'در اینجا سوال دوم مطرح میشه مثلا'} isUser={true}/>*/}


            {/*<Message text={'در اینجا پاسخ بات کمی طولانی بنظر میرسه برای اینکه نشون بدیم که متن تا چه اندازه می‌تونه زیاد باشه.'} isUser={false}/>*/}


            {/*/!*<Message text={'در اینجا پاسخ بات ما رو مشاهده می‌کنید مثلا'} isUser={false}/>*!/*/}


            {/*<Message text={'در اینجا سوال دوم مطرح میشه مثلا'} isUser={true}/>*/}

            {/*<Message text={'در اینجا پاسخ بات کمی طولانی بنظر میرسه برای اینکه نشون بدیم که متن تا چه اندازه می‌تونه زیاد باشه.'} isUser={false}/>*/}

            {/*<Message text={'در اینجا پاسخ بات ما رو مشاهده می‌کنید مثلا'} isUser={false}/>*/}

            {/*<Message text={'در اینجا سوال سوم مطرح میشه مثلا'} isUser={true}/>*/}

            {/*<Message text={'در اینجا پاسخ بات کمی طولانی بنظر میرسه برای اینکه نشون بدیم که متن تا چه اندازه می‌تونه زیاد باشه.'} isUser={false}/>*/}

            </div>


        </ChatBoxContainer>
    );
}

export default ChatBox;