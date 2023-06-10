// This component renders a message based on the provided 'message' prop

const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    // If the message has attachments, render an image
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }

  // If the message does not have attachments, render a text message
  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
      {message.text}
    </div>
  );
};

export default MyMessage;
