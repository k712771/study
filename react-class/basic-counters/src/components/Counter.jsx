import React, { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <div>
				<span className='number'>{count}</span>/<span>{total}</span>
			</div>
      <button
        className='button'
        onClick={() => {
          setCount(prev => prev + 1);
          onClick();
        }}
      >
        Add +
      </button>
    </div>
  );
}
