import {useMobile} from "@/shared/lib/hooks/useMobile/useMobile";
import {Page} from "@/widgets/Page";
import {Text, TextAlign, TextSize} from '@/shared/ui/Text'
import cls from './MainPage.module.scss'
import {Contacts} from "@/widgets/Contacts";
import {Logo} from "@/shared/ui/Logo/Logo";
import imgLogo from '@/shared/assets/images/Logo.png'
import {classNames, Mods} from "@/shared/lib/classNames/classNames";

const MainPage = () => {
	const isMobile = useMobile()

	const mods: Mods = {
		[cls.mobile]: isMobile,
	}

	return (
		<Page className={classNames(cls.MainPage, mods, []) }>
			<div className={cls.title}>
				<Text size={isMobile ? TextSize.S : TextSize.M} align={TextAlign.CENTER} title={'Общественная организация'}/>
				{isMobile &&
					<h4 className={cls.bold}>
						&laquo;Федерация Технических Видов Спорта&raquo;
					</h4>
				}
				{!isMobile &&
					<h2 className={cls.bold}>
						&laquo;Федерация Технических Видов Спорта&raquo;
					</h2>
				}

				<Text size={isMobile ? TextSize.S : TextSize.M} align={TextAlign.CENTER} title={'города Хабаровск'}/>
			</div>
			<Logo src={imgLogo} width={isMobile ? 320 : 900} height={isMobile ? 140 : 340}/>
			<Contacts/>
		</Page>
	)
}

export default MainPage
