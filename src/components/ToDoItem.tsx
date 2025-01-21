import React from 'react';
import { ITask, ToggleStatusType, DeleteTaskType } from './types/types.ts';
import { ListItem, ListItemText, ListItemButton, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
	todoItem: ITask;
	toggleStatus: ToggleStatusType;
	deleteTask: DeleteTaskType;
}

const TodoItem: React.FC<Props> = ({ todoItem, toggleStatus, deleteTask }) => {
	return (
		<ListItem
			disableGutters
			secondaryAction={
				<IconButton
					edge="end"
					aria-label="delete"
					onClick={() => deleteTask(todoItem.id)}
				>
					<DeleteIcon />
				</IconButton>
			}
		>
			<ListItemButton onClick={() => toggleStatus(todoItem.id)}>
				<Checkbox
					checked={todoItem.completed}
					tabIndex={-1}
					disableRipple
				/>
				<ListItemText
					primary={todoItem.text}
					style={{ textDecoration: todoItem.completed ? 'line-through' : 'none' }}
				/>
			</ListItemButton>
		</ListItem>
	);
};

export default TodoItem;