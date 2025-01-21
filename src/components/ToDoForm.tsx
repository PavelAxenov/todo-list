import React, { useState } from 'react';
import { AddTaskType } from './types/types.ts';
import { TextField, Button, Box } from '@mui/material';

interface Props {
	addTask: AddTaskType;
}

const TodoForm: React.FC<Props> = ({ addTask }) => {
	const [text, setText] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (text.trim()) {
			addTask(text);
			setText('');
		}
	};

	return (
		<Box
			component="form"
			sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
			onSubmit={handleSubmit}
		>
			<TextField
				label="Добавить задачу"
				variant="outlined"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>

			<Button
				type="submit"
				variant="contained"
				color="primary"
			>
				Добавить
			</Button>
		</Box>
	);
};

export default TodoForm;
