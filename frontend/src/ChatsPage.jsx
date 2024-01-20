import { PrettyChatWindow } from 'react-chat-engine-pretty'



const ChatsPage = (props) => {
    return(
    <div style={{ height: '100vh' }}>
        <PrettyChatWindow
        projectId='dca1f135-6946-4636-b7f0-7442ba666e47'
        username= {props.user.username}
        secret= {props.user.secret}
        style={{ height: '100%' }}
        />
    </div>
    )
}

export default ChatsPage