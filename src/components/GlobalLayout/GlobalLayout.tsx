import { TJSXProp } from "@/domain"
import { GlobalThemeMui } from "@/styles/mui/GlobalThemeMui"
import { CustomSwitch } from "../CustomSwitch/CustomSwitch"

export const GlobalLayout = ({ children }: TJSXProp) => {
    return (
        <GlobalThemeMui >
            <>
                <CustomSwitch />
                {children}
            </>
        </GlobalThemeMui>
    )
}