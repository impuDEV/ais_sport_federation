import {memo} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";

interface LoaderProps {
	className?: string;
}

export const Loader = memo(({className}: LoaderProps) => {
	return (
		<div className={classNames('lds-roller', {}, [className])}>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	)
})
