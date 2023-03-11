import {Box, Typography} from "@mui/material";
import {images} from "../constants";
import React from "react";
import {ThreeDots} from "react-loader-spinner";

const Message = (message: {
    text: string;
    isLoading: boolean;
    isUser: boolean
}) => {
    return (
        <div
            style={
                {
                    direction: message.isUser ? 'rtl' : 'ltr',
                }
            }
        >
            <img
                src={
                    message.isUser ? images.User : images.Bot
                }
                height={'58px'}
                width={'58px'}
                style={
                    {
                        marginLeft: message.isUser ? '1rem' : 0,
                        marginRight: message.isUser ? 0 : '1rem',
                        borderRadius: '100%',
                        backgroundColor: message.isUser ? '#28286c' : '#8dacb4',
                        padding: '3px'
                    }
                }
            />
            <Box
                sx={{
                    backgroundColor: message.isUser ? '#28286c' : '#8dacb4',
                    direction: 'rtl',
                    color: message.isUser ? '#8dacb4' : '#00001e',
                    borderRadius: '10px',
                    padding: '1rem',
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    display: 'inline-flex',
                    maxWidth: '50%'
                }}
            >

                {!message.isLoading && <Typography variant={'h6'}>
                    {message.text}
                </Typography>}

                <ThreeDots
                    height="25"
                    width="50"
                    radius="9"
                    color={message.isUser ? '#8dacb4' : '#28286c'}
                    ariaLabel="three-dots-loading"
                    visible={message.isLoading && !message.isUser}
                />
            </Box>
        </div>
    );
}

export default Message;