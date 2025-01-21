import React, { useState } from 'react';
import TodoItem from './ToDoItem.tsx';
import TodoForm from './ToDoForm.tsx';
import { ITask, ToggleStatusType, DeleteTaskType, AddTaskType } from './types/types.ts';
import { Container, Typography, List, Box } from '@mui/material';

const ToDoList: React.FC = () => {
	const [tasksList, setTasksList] = useState<ITask[]>([
		{ id: 1, text: 'Изучить TypeScript', completed: false },
		{ id: 2, text: 'Создать TODO List', completed: true },
		{ id: 3, text: 'Добавить разделение на выполненные', completed: false },
	]);

	const addTask: AddTaskType = (text: string) => {
		const newTask: ITask = {
			id: Date.now(),
			text,
			completed: false,
		};

		setTasksList([...tasksList, newTask]);
	};

	const toggleTaskStatus: ToggleStatusType = (id: number) => {
		setTasksList(
			tasksList.map((task: ITask) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const deleteTask: DeleteTaskType = (id: number) => {
		setTasksList(tasksList.filter((task: ITask) => task.id !== id));
	};

	const failedTasks = tasksList.filter((task: ITask) => !task.completed);
	const completedTasks = tasksList.filter((task: ITask) => task.completed);

	return (
		<Container maxWidth="sm">
			<Typography variant="h3" align="center" sx={{ mb: 2 }}>
				TODO List
			</Typography>
			<TodoForm addTask={addTask} />

			<Box sx={{ mt: 3 }}>
				<Typography variant="h5" >
					Невыполненные задачи
				</Typography>

				{!failedTasks.length && <Typography variant="body2">
					Задачи отсутствуют
				</Typography>}

				<List>
					{failedTasks.map((item: ITask) => (
						<TodoItem
							key={item.id}
							todoItem={item}
							toggleStatus={toggleTaskStatus}
							deleteTask={deleteTask}
						/>
					))}
				</List>
			</Box>

			<Box sx={{ mt: 3 }}>
				<Typography variant="h5">
					Выполненные задачи
				</Typography>

				{!completedTasks.length && <Typography variant="body2">
					Задачи отсутствуют
				</Typography>}

				<List>
					{completedTasks.map((item: ITask) => (
						<TodoItem
							key={item.id}
							todoItem={item}
							toggleStatus={toggleTaskStatus}
							deleteTask={deleteTask}
						/>
					))}
				</List>
			</Box>
		</Container>
	);
};

export default ToDoList;