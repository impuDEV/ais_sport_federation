import {Theme} from "@/shared/const/theme";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";

interface UseThemeResult {
	toggleTheme: () => void
	theme: Theme
}

export function useTheme(): UseThemeResult {
	const {theme, setTheme} = useContext(ThemeContext)

	const toggleTheme = () => {
		const newTheme = Theme.STANDARD
	}

	return {
		theme: theme || Theme.STANDARD,
		toggleTheme
	}
}
