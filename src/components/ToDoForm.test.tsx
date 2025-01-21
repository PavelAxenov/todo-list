import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './ToDoForm.tsx';
import { AddTaskType } from './types/types.ts';

const mockAddTodo: AddTaskType = jest.fn();

describe('TodoForm', () => {
	it('должен рендерить форму с полем ввода и кнопкой', () => {
		render(<TodoForm addTask={mockAddTodo} />);
		expect(screen.getByRole('textbox')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Добавить' })).toBeInTheDocument();
	});

	it('должен вызывать addTask при отправке формы с текстом', () => {
		render(<TodoForm addTask={mockAddTodo} />);
		const inputElement = screen.getByRole('textbox');
		const buttonElement = screen.getByRole('button', { name: 'Добавить' });

		fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
		fireEvent.click(buttonElement);

		expect(mockAddTodo).toHaveBeenCalledWith('Test Todo');
		expect(inputElement).toHaveValue('');
	});

	it('не должен вызывать addTask при отправке пустой формы', () => {
		render(<TodoForm addTask={mockAddTodo} />);
		const buttonElement = screen.getByRole('button', { name: 'Добавить' });

		fireEvent.click(buttonElement);

		expect(mockAddTodo).not.toHaveBeenCalled();
	});
});
