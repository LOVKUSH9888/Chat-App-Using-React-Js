import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";

// ChatFeed component receives props including chats, activeChat, userName, and messages
const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  // Get the active chat based on chats and activeChat props
  const chat = chats && chats[activeChat];

  // Function to render read receipts for each message
  const renderReadReceipts = (message, isMyMessage) =>
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );

  // Function to render the messages
  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {/* Render MyMessage component if the message is sent by the current user, otherwise render TheirMessage component */}
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {/* Render read receipts for the message */}
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  // If no chat is available, return an empty div
  if (!chat) return <div />;

  // Render the chat feed UI
  return (
    <div className="chat-feed">
      <div className="chat-title-container">

      {/*Chat?. will check that there will be the chat forrst*/}

        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">

        
          {/* Render usernames of people in the chat */}
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>


      {/* Render the messages */}
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">


        {/* Render the MessageForm component for sending new messages */}

        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
