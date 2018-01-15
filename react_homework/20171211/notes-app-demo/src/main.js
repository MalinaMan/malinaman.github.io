import React from 'react';
import ReactDOM from 'react-dom';
import NotesApp from './components/notesApp.jsx';
import './components/style.css';

ReactDOM.render(
	<NotesApp />,
	document.getElementById("mount-point")
);