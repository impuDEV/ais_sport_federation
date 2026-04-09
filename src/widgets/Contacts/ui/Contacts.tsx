import {memo} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Contacts.module.scss'
import {HStack, VStack} from "@/shared/ui/Stack";
import {Icon} from "@/shared/ui/Icon";
import {Text, TextSize} from "@/shared/ui/Text"
import geo from "@/shared/assets/icons/geo 2.svg";
import phone from "@/shared/assets/icons/phone.svg";
import email from "@/shared/assets/icons/email.svg";
import {Container} from "@/shared/ui/Container";
import {YandexMap} from "@/widgets/YandexMap";
import {useMobile} from "@/shared/lib/hooks/useMobile/useMobile";

interface ContactsProps {
    className?: string
}

export const Contacts = memo((props: ContactsProps) => {
    const { className } = props
	const isMobile = useMobile()

	const textSize = isMobile ? TextSize.M : TextSize.L

	return (
		<Container className={classNames(cls.Contacts, {}, [className])}>
			{!isMobile &&
				<HStack justify="center" gap="8" >
					<VStack align="start" gap="16" >
						<HStack gap="16">
							<Icon Svg={geo}/>
							<VStack align="start">
								<Text text="680510, Хабаровский край," size={textSize} />
								<Text text="с. Тополево," size={textSize} />
								<Text text="ул. Пионерская, д.2-18" size={textSize} />
							</VStack>
						</HStack>
						<HStack gap="16">
							<Icon Svg={phone}/>
							<Text text="+7(924)317-24-03" size={textSize} />
						</HStack>
						<HStack gap="8">
							<Icon Svg={email}/>
							<Text text="RFTVSHK@mail.ru" size={textSize} />
						</HStack>
					</VStack>
					<VStack className="RightBlock" align="end">
						<YandexMap width={450} />
					</VStack>
				</HStack>
			}
			{isMobile &&
				<VStack align="center" gap="16" >
					<HStack gap="16">
						<Icon Svg={geo}/>
						<VStack align="start">
							<Text text="680510, Хабаровский край," size={textSize} />
							<Text text="с. Тополево," size={textSize} />
							<Text text="ул. Пионерская, д.2, кв,18" size={textSize} />
						</VStack>
					</HStack>
					<YandexMap width={350}/>
					<HStack gap="16">
						<Icon Svg={phone}/>
						<Text text="+7(924)317-24-03" size={textSize} />
					</HStack>
					<HStack gap="8">
						<Icon Svg={email}/>
						<Text text="RFTVSHK@mail.ru" size={textSize} />
					</HStack>
				</VStack>
			}
		</Container>
	)
})

