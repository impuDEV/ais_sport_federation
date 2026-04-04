import './styles/index.scss'
import {classNames} from "@/shared/lib/classNames/classNames";
import {Suspense} from "react";

const App = () => {

return (
	<div className={classNames('app', {}, [])}>
		<Suspense fallback="">
			<div className="content-page">
				App
			</div>
		</Suspense>
	</div>
)
}

export default App
