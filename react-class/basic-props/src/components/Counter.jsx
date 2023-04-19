import React, { useState } from 'react';

export default function Counter() {
	/**
	 * useState => ( 데이터 값, 해당 데이터에 대한 setter )
	 */
	const [ count, setCount ] = useState( 0 );
	
	return (
		<div className='counter'>
			<span className='number'>{ count }</span>
			<button className='button' onClick={ _ => {
				//setCount(count + 1);
				setCount( prev => prev + 1 );
			}}>Add+</button>
		</div>
	);
}