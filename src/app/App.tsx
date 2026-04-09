import './styles/index.scss'
import {classNames} from "@/shared/lib/classNames/classNames";
import {Suspense} from "react";
import {AppRouter} from "@/app/providers/router";
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme";

const App = () => {
	const {theme} = useTheme();

return (
	<div className={classNames('app', {}, [theme])}>
		<Suspense fallback="">
			<div className="content-page">
				<AppRouter/>
			</div>
		</Suspense>
	</div>
)
}

export default App
