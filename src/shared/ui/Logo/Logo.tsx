import {CSSProperties, memo, useMemo} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Logo.module.scss'
import {Loader} from "@/shared/ui/Loader";
import {Icon} from "@/shared/ui/Icon";
import noimage from '../../assets/icons/nophoto.svg'
import {AppImage} from "@/shared/ui/AppImage";

interface LogoProps {
	src?: string
	width?: number
	height?: number
	alt?: string
	fallbackInverted?: boolean
}

export const Logo = memo((props: LogoProps) => {
    const {
		src,
		width,
		height,
		alt,
		fallbackInverted,
	} = props

	const styles = useMemo<CSSProperties>(() => ({
		width,
		height,
	}), [width, height])

	const fallback = <Loader/>
	const errorFallback = <Icon Svg={noimage}/>

	return (
		<div className={classNames(cls.Logo, {}, [])}>
			<AppImage
				fallBack={fallback}
				errorFallback={errorFallback}
				src={src}
				alt={alt}
				style={styles}
			/>
		</div>

	)
})

