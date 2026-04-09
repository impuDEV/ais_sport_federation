import {useMediaQuery} from "react-responsive";
import {Settings} from "@/shared/const/settings";


export const useMobile = () => !useMediaQuery({ minWidth: Settings.RESPONSIVE_MOBILE_WIDTH })
