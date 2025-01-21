import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import ToDoList from './components/ToDoList.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ToDoList />
	</StrictMode>,
)
