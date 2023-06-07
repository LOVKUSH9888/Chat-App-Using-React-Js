import "./App.css";

import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <ChatEngine
      height = "100vh"
      projectID="df24f361-c963-43c6-8aea-43b88ef8e98e"
      userName="Lovkush"
      userSecret="123123"
      
    />
  );
}

export default App;
