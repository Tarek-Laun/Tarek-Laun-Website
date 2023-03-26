import chatStyle from '../styles/Chat.module.css'
import { useRouter } from 'next/router'

export default function Footer() {
	const router = useRouter();
	var searchJobs = false;

  	return (
        <div className={chatStyle.chatContainer}>
            <div className={chatStyle.chatBox}>
                <h3>Support Chat</h3>
                <div className={chatStyle.messageList}>
                    <p>Chat Message</p>
                </div>
                <form className={chatStyle.messageBox}>
                    <input type="text" />
                    <button>
                        <img src='/Send.svg'></img>
                    </button>
                </form>
            </div>
            <div className={chatStyle.chatButton}>
                <img src='/Chat.svg'></img>
            </div>
        </div>
  	)
}