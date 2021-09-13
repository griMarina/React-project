import { useSelector } from "react-redux";
import { userNameSelector } from "../../Store/Profile/selectors";
import { messageListSelector } from "../../Store/Messages/selectors";
import "./MessageList.css";

export const MessageList = ({ chatId }) => {
  const userName = useSelector(userNameSelector);

  const messages = useSelector(messageListSelector);

  if (!messages[chatId]) {
    return <div className="message-list"></div>;
  }

  return (
    <div className="message-list">
      {messages[chatId].map((message) => {
        return (
          <div className="message" key={message.id}>
            <span>
              {userName}: {message.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};
