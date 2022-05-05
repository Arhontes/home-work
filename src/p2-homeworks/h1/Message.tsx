import React from 'react'
import message from './Message.module.css'


type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={message.message_container}>

            <img className={message.profile_ico} src={props.avatar} alt=""/>

            <div className={message.flex_container}>
                <div className={message.container}>
                    <div className={message.appendix}>

                    </div>
                </div>

                <div className={message.flex_box}>
                    <div className={message.wrapper}>
                        <div className={message.dialog}>
                            <div className={message.dialog_wrapper}>
                                <div className={message.name}>
                                    {props.name}
                                </div>
                                <div className={message.message_text}>
                                    {props.message}
                                </div>
                            </div>

                        </div>
                        <div className={message.time_info}>
                            {props.time}
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

