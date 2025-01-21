export interface ITask {
	id: number;
	text: string;
	completed: boolean;
}

export type AddTaskType = (text: string) => void;
export type ToggleStatusType = (id: number) => void;
export type DeleteTaskType = (id: number) => void;
