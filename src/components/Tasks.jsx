import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, onDelete, onRemind }) => {
	return (
		<div>
			{tasks.map((el) => (
				<Task key={el.id} task={el} onDelete={onDelete} onRemind={onRemind} />
			))}
		</div>
	);
};

export default Tasks;
