import './styles/index.scss'
import {classNames} from "@/shared/lib/classNames/classNames";
import {Suspense} from "react";
import {AppRouter} from "@/app/providers/router";

const App = () => {

return (
	<div className={classNames('app', {}, [])}>
		<Suspense fallback="">
			<div className="content-page">
				<AppRouter/>
			</div>
		</Suspense>
	</div>
)
}

export default App
