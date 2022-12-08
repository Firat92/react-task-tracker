import React from 'react';
import Button from './Button';

const Header = ({ onAdd, showAdd }) => {
	return (
		<header className='header'>
			<h1>Task Tracker</h1>
			<Button
				color={showAdd ? '#ff0028' : '#51e2f5'}
				text={showAdd ? 'Close me!' : 'Add me!'}
				onClick={onAdd}
			/>
		</header>
	);
};

export default Header;
