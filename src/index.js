import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
	todos: [
		{id: 1, name: 'Render Static UI', isComplete: true},
		{id: 2, name: 'Create Initial State', isComplete: true},
		{id: 3, name: 'Render based on State', isComplete: false}
	]
}
ReactDOM.render(<App todos={state.todos}/>, document.getElementById('root'));
registerServiceWorker();
