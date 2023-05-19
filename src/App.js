import "./App.css"
import HomePage from "./HomePage"
import { createTheme } from "@mui/material/styles"
import { ThemeProvider } from "@emotion/react"

const theme = createTheme({
    palette: {
        primary: {
            light: "#d4e9e2",
            main: "#008248",
            dark: "#1e3932",
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: "#f3f1e7",
            main: "#d4e9e2",
            // dark: will be calculated from palette.secondary.main,
            contrastText: "#ffcc00",
        },
        // Provide every color token (light, main, dark, and contrastText) when using
        // custom colors for props in Material UI's components.
        // Then you will be able to use it like this: `<Button color="custom">`
        // (For TypeScript, you need to add module augmentation for the `custom` value)
        custom: {
            light: "#ffa726",
            main: "#f57c00",
            dark: "#ef6c00",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
    components: {
        // Name of the component ⚛️
        MuiButtonBase: {
            defaultProps: {
                // The props to apply
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
    },
})

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <HomePage />
            </ThemeProvider>
        </div>
    )
}

export default App
