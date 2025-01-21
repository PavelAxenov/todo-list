import { render, screen, fireEvent } from '@testing-library/react';
import ToDoList from "./ToDoList";

describe('App', () => {
	it('должен рендерить список дел и форму добавления', () => {
		render(<ToDoList />);
		expect(screen.getByText('TODO List')).toBeInTheDocument();
		expect(screen.getByRole('textbox')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Добавить' })).toBeInTheDocument();
		expect(screen.getByText('Изучить TypeScript')).toBeInTheDocument();
		expect(screen.getByText('Создать TODO List')).toBeInTheDocument();
		expect(screen.getByText('Добавить разделение на выполненные')).toBeInTheDocument();
	});


	it('должен добавлять новую задачу', () => {
		render(<ToDoList />);
		const inputElement = screen.getByRole('textbox');
		const addButton = screen.getByRole('button', { name: 'Добавить' });

		fireEvent.change(inputElement, { target: { value: 'New Task' } });
		fireEvent.click(addButton);

		expect(screen.getByText('New Task')).toBeInTheDocument();
	});

	it('должен переключать статус задачи', () => {
		render(<ToDoList />);
		const checkboxElement = screen.getAllByRole('checkbox')[0]; // Получаем первый чекбокс
		fireEvent.click(checkboxElement);
		expect(checkboxElement).toBeChecked();
		fireEvent.click(checkboxElement);
		expect(checkboxElement).not.toBeChecked();
	});

	it('должен удалять задачу', () => {
		render(<ToDoList />);
		const deleteButton = screen.getAllByRole('button', { name: 'delete' })[0];
		fireEvent.click(deleteButton);
		expect(screen.queryByText('Изучить TypeScript')).toBeNull();
	});
});
