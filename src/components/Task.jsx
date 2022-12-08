import React from 'react';
import { ImBin } from 'react-icons/im';

const Task = ({ task, onDelete, onRemind }) => {
	return (
		<div
			className={`task ${task.reminder ? 'reminder' : ' '}`}
			onDoubleClick={() => onRemind(task.id)}
		>
			<h3>
				{task.text}
				<ImBin style={{ color: '#ff0028' }} onClick={() => onDelete(task.id)} />
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

export default Task;
