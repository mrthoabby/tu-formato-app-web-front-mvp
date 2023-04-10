import { TJSXProp } from "@/domain";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
const theme = createTheme({
    palette: {
        primary: {
            main: "#232b33"
        }
    },
    components: {
        MuiButton: {

            styleOverrides: {
                root: {
                    width: "200px",
                    height: "30px"
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    ":hover": {
                        border: "solid 3px #1e5c7c",
                        cursor: "pointer"
                    },
                    // boxSizing: "content-box"
                }
            }
        }

        // Name of the component

        //   MuiButtonBase: {
        //     defaultProps: {
        //       // The props to change the default for.
        //       disableRipple: true, // No more ripple, on the whole application 💣!
        //     },
        //   },
    },
});

export const GlobalThemeMui = ({ children }: TJSXProp) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )

}