import { memo } from 'react'
import {classNames, Mods} from '@/shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextVariant {
	PRIMARY = 'primary',
	INVERTED = 'inverted',
	ERROR = 'error',
}

export enum TextAlign {
	RIGHT = 'right',
	LEFT = 'left',
	CENTER = 'center',
}

export enum TextSize {
	S = 'size_s',
	M = 'size_m',
	L = 'size_l',
}

interface TextProps {
    className?: string
	title?: string
	text?: string
	variant?: TextVariant
	align?: TextAlign
	size?: TextSize
	bold?: boolean
	italic?: boolean
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
	[TextSize.S]: 'h3',
	[TextSize.M]: 'h2',
	[TextSize.L]: 'h1',
}
export const Text = memo((props: TextProps) => {
    const {
		className,
		title,
		text,
		variant = TextVariant.PRIMARY,
		align = TextAlign.LEFT,
		size = TextSize.M,
		bold = false,
		italic = false,
	} = props

	const HeaderTag = mapSizeToHeaderTag[size]

	const mods: Mods = {
		[cls[variant]]: true,
		[cls[align]]: true,
		[cls[size]]: true,
		[cls.bold]: bold,
		[cls.italic]: italic,
	}

	return (
		<div className={classNames(cls.Text, mods, [className])}>
			{title && (
				<HeaderTag
					className={cls.title}
				>
					{title}
				</HeaderTag>
			)}
			{text && (
				<p
					className={cls.text}
				>
					{text}
				</p>
			)}
		</div>
	)
})

