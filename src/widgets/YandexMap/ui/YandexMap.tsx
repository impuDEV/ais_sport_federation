import { YMaps, Map, ZoomControl, Placemark } from '@pbe/react-yandex-maps'
import { memo } from 'react'

import cls from './YandexMap.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames";

interface YandexMapProps {
    className?: string
	width?: number
}

export const YandexMap = memo(({ className, width }: YandexMapProps) => {
	return (
		<div className={classNames(cls.YandexMap, {}, [className])}>
			<YMaps>
				<Map
					defaultState={{
						center: [48.507175, 135.174828],
						zoom: 15,
						controls: ['fullscreenControl'],
						behaviors: ['drag']
					}}
					width={width}
					modules={['control.FullscreenControl']}
				>
					<ZoomControl/>
					<Placemark geometry={[48.507175, 135.174828]}
							   properties={{ hintContent: 'АИС' }}/>
				</Map>
			</YMaps>
		</div>

	)
})

