// This component renders a message sent by someone else (not the current user)

const TheirMessage = ({ lastMessage, message }) => {
  // Check if this is the first message by the current user
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {/* Render the avatar only for the first message by the current user */}
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />
      )}

      {/* Render the message content based on whether it has attachments or not */}
      {/*Same as the my mesaage components*/}

      {message.attachments && message.attachments.length > 0 ? (
        // Render an image if the message has attachments
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
        />
      ) : (
        // Render a text message if the message does not have attachments
        <div
          className="message"
          style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
