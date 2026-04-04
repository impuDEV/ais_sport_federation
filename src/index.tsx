import {createRoot} from "react-dom/client";
import App from "@/app/App";
import '@/app/styles/index.scss'

const appContainer = document.getElementById('root')

if (!appContainer) {
	throw new Error('Failed to load appContainer. Can`t inject React application')
}

const root = createRoot(appContainer)

root.render(
	<App/>
)
