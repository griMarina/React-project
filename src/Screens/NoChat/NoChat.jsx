import { ChatList } from "../../Components/Chats";

export const NoChat = () => {
  return (
    <>
      <div className="App-wrap">
        <div className="App-main">
          <ChatList />
          <div className="App-messages">
            <h3 className="App-title">
              Please select a chat or start a new chat!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
