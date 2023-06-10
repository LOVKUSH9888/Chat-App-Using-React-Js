import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    // Notify that the current user is typing
    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {

    //This will do not to refresh again when we send 
    event.preventDefault();

    //This will remove the white spaces and other spaces betwwwn the spaces
    const text = value.trim();

    if (text.length > 0) {
      // Send the message with the entered text -- Passing the 3 props
      sendMessage(creds, chatId, { text });
    }

    // Reset the input value
    setValue('');
  };

  const handleUpload = (event) => {
    // Send the message with the uploaded files
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      {/* Input field for entering the message */}
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      {/* Button for uploading an image */}
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />

      {/* Button for sending the message */}
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
