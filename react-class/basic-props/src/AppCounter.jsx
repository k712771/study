import React from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
	return (
		<div className='container'>
			<Counter />
			<Counter />
		</div>
	);
}