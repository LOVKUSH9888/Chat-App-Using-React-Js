import { useState } from 'react';
import axios from 'axios';

const projectID = 'df24f361-c963-43c6-8aea-43b88ef8e98e';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();



    //Setting the Authentication

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      // Authenticate the user with the provided credentials
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      // Store the username and password in local storage for future use
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // Reload the page to start the chat application
      window.location.reload();
      setError('');
    } catch (err) {
      // Display an error message if the credentials are incorrect
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          {/* Input field for entering the username */}
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />

          {/* Input field for entering the password */}
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />

          {/* Button to submit the form and start chatting */}
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>

        {/* Display error message if authentication fails */}
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default LoginForm;
