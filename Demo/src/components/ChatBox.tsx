import {Button, InputAdornment, styled, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import Message from "./Message";
import {useState} from "react";
import {Form, Formik, FormikHelpers, FormikProps} from "formik";
import {motion} from "framer-motion"
import useSendMessage from "../hooks/queries/useSendMessage";

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

const UserChatForm = (styled(Form))(
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
interface FormValue {
    question: string;
}

interface ChatMessage {
    context: string;
    isFromUser: boolean;
    isLoading: boolean;
}

interface BotResponse {
    data: string
}


const createMessage = (context: string, setMessages: any, isUser: boolean, isLoading: boolean) => {
    const message: ChatMessage = {
        context: context,
        isFromUser: isUser,
        isLoading: isLoading
    }

    setMessages(
        (prev: []) => {
            return [
                message,
                ...prev,
            ]
        }
    )
}

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const mutation = useSendMessage();
    const initialValues: FormValue = {question: ''}


    return (

        <ChatBoxContainer>


            {/*     text area for user to type questions*/}
            <Formik
                initialValues={initialValues}
                onSubmit={(
                    values: FormValue,
                    actions: FormikHelpers<FormValue>,
                ) => {
                    mutation.mutate(
                        values.question
                    );
                    // @ts-ignore
                    actions.resetForm(initialValues)

                    const timout = setTimeout(() => {
                        createMessage('', setMessages, false, true);
                        clearTimeout(timout);
                    }, 1500)
                    createMessage(values.question, setMessages, true, false);
                }}
            >
                {(props: FormikProps<FormValue>) => {
                    const {
                        values,
                        handleChange
                    } = props;
                    return (
                        <UserChatForm>
                            {/*    add text field for user question*/}

                            <ChatTextField variant={'filled'}
                                           fullWidth
                                           autoComplete='off'
                                           placeholder={'اینجا سوالت رو برام بنویس'}
                                           id={'question'}
                                           name={'question'}
                                           value={values.question}
                                           onChange={handleChange}
                                           disabled={mutation.isLoading}
                                           InputProps={{
                                               startAdornment:
                                                   <InputAdornment position={'end'}>
                                                       <SearchIcon sx={{fontSize: '40px', color: '#28286c'}}/>
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
                                type={'submit'}
                                variant={'contained'}
                                color={'primary'}
                            >
                                {/*    add send icon to button*/}
                                <SendIcon sx={{
                                    transform: 'rotate(180deg)'
                                }}/>
                            </SendButton>
                        </UserChatForm>
                    )
                }
                }
            </Formik>

            {/*message container with overlay for showing chat history*/}
            <div style={
                {
                    overflow: 'scroll',
                    height: '650px',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column-reverse'
                }
            }>

                {
                    messages.map((message: ChatMessage, index) => {
                        const isLoading = mutation.isLoading;
                        const isLast = index === 0;
                        if (isLast && !message.isFromUser) {
                            if (isLoading) {
                                return (
                                    <motion.div animate={{x: 10}}>
                                        <Message text={message.context} isLoading={true}
                                                 isUser={false}
                                                 key={index}/>
                                    </motion.div>
                                )
                            } else {
                                if (mutation.error) message.context = "سوال شمارو به تیم اجرایی منتقل می‌کنم و به زودی پاسخ شما را خواهند داد"
                                // @ts-ignore
                                else message.context = mutation.data.data.answer;

                                return (
                                    <motion.div animate={{x: 10}}>
                                        <Message text={message.context} isLoading={false}
                                                 isUser={false}
                                                 key={index}/>
                                    </motion.div>)
                            }

                        } else {
                            message.isLoading = false;

                            if (isLast) {
                                return (
                                    <motion.div animate={{x: -10}}>
                                        <Message text={message.context} isLoading={message.isLoading}
                                                 isUser={message.isFromUser}
                                                 key={index}/>
                                    </motion.div>
                                )
                            }

                            return (
                                <motion.div>
                                    <Message text={message.context} isLoading={message.isLoading}
                                             isUser={message.isFromUser}
                                             key={index}/>
                                </motion.div>
                            )
                        }
                    })
                }


            </div>


        </ChatBoxContainer>
    );
}

export default ChatBox;