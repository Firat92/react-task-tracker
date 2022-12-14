import React from 'react';

const Button = ({ text, onClick, color }) => {
	return (
		<button className='btn' onClick={onClick} style={{ background: color }}>
			{text}
		</button>
	);
};

export default Button;
