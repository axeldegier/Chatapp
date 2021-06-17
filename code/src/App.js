import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';

import './App.css';

export function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='Admin'
			userSecret='Admin123'
			projectID='27aa9843-f2b8-4a11-8640-85ef2cc4b1c3'
            RenderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}
export default App;
