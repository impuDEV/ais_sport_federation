import {Theme} from "@/shared/const/theme";
import {ReactNode, useMemo, useState} from "react";
import {ThemeContext} from "@/shared/lib/context/ThemeContext";

const defaultTheme = Theme.STANDARD

interface ThemeProviderProps {
	initialTheme?: Theme
	children: ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
	const { initialTheme, children } = props

	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme
		}),
		[theme]
	)

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
