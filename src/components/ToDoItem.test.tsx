import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './ToDoItem.tsx';
import { ITask, ToggleStatusType, DeleteTaskType } from './types/types.ts';

const mockToggleTaskStatus: ToggleStatusType = jest.fn();
const mockDeleteTask: DeleteTaskType = jest.fn();

const testTodo: ITask = {
	id: 1,
	text: 'Test Todo',
	completed: false,
};

describe('TodoItem', () => {
	it('должен рендерить задачу с текстом, чекбоксом и кнопкой удаления', () => {
		render(
			<TodoItem
				todoItem={testTodo}
				toggleStatus={mockToggleTaskStatus}
				deleteTask={mockDeleteTask}
			/>
		);

		expect(screen.getByText('Test Todo')).toBeInTheDocument();
		expect(screen.getByRole('checkbox')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'delete' })).toBeInTheDocument();
	});

	it('должен вызывать toggleStatus при клике на чекбокс', () => {
		render(
			<TodoItem
				todoItem={testTodo}
				toggleStatus={mockToggleTaskStatus}
				deleteTask={mockDeleteTask}
			/>
		);
		const checkboxElement = screen.getByRole('checkbox');
		fireEvent.click(checkboxElement);
		expect(mockToggleTaskStatus).toHaveBeenCalledWith(testTodo.id);
	});

	it('должен вызывать deleteTask при клике на кнопку удаления', () => {
		render(
			<TodoItem
				todoItem={testTodo}
				toggleStatus={mockToggleTaskStatus}
				deleteTask={mockDeleteTask}
			/>
		);
		const deleteButton = screen.getByRole('button', { name: 'delete' })
		fireEvent.click(deleteButton);
		expect(mockDeleteTask).toHaveBeenCalledWith(testTodo.id);
	});
});
