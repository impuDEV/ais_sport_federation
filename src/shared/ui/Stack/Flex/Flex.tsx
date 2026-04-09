import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react'
import {classNames, Mods} from '@/shared/lib/classNames/classNames'
import cls from './Flex.module.scss'

export type FlexDirection = 'column' | 'row'
export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexGap = '4' | '8' | '16' | '32'

const directionClasses: Record<FlexDirection, string> = {
	row: cls.directionRow,
	column: cls.directionColumn,
}

const justifyClasses: Record<FlexJustify, string> = {
	start: cls.justifyStart,
	center: cls.justifyCenter,
	end: cls.justifyEnd,
	between: cls.justifyBetween,
}

const alignClasses: Record<FlexAlign, string> = {
	start: cls.alignStart,
	center: cls.alignCenter,
	end: cls.alignEnd,
}

const gapClasses: Record<FlexGap, string> = {
	4: cls.gap4,
	8: cls.gap8,
	16: cls.gap16,
	32: cls.gap32,
}

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps {
    className?: string
	children: ReactNode
	direction: 'column' | 'row'
	justify?: FlexJustify
	align?: FlexAlign
	gap?: FlexGap
	max?: boolean
}

export const Flex = (props: FlexProps) => {
    const {
		className,
		children,
		direction = 'row',
		justify = 'start',
		align = 'center',
		gap,
		max
	} = props

	const classes = [
		className,
		directionClasses[direction],
		justifyClasses[justify],
		alignClasses[align],
		gap && gapClasses[gap],
	]

	const mods: Mods = {
		[cls.max]: max,
	}

	return (
		<div className={classNames(cls.Flex, mods, classes)}>
			{children}
		</div>
	)
}

