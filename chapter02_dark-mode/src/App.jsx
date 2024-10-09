import {createContext, memo, useContext, useState} from 'react'

const useDarkMode = () => createContext({});
const DarkModeContext = useDarkMode();

function Button({children, ...rest}) {
    const {isDarkMode} = useContext(DarkModeContext);
    const style = {
        backgroundColor: isDarkMode ? "#333" : "#CCC",
        border: "1px solid",
        color: "inherit",
    }
    return (<button style={style} {...rest}>{children}</button>);
}

function ToggleButton() {
    const {toggleDarkMode} = useContext(DarkModeContext);
    return (<Button onClick={toggleDarkMode}>Toggle mode</Button>);
}

const Header = memo(function Header() {
    const style = {
        padding: "10px 5px",
        borderBottom: "1px solid",
        marginBottom: "10px",
        display: "flex",
        gap: "5px",
        justifyContent: "flex-end",
    };

    return (
        <header style={style}>
            <Button>Products</Button>
            <Button>Services</Button>
            <Button>Pricing</Button>
            <ToggleButton/>
        </header>)
});

function Main() {
    const {isDarkMode} = useContext(DarkModeContext);
    const style = {
        color: isDarkMode ? "white" : "black",
        backgroundColor: isDarkMode ? "black" : "white",
        margin: "-8px",
        minHeight: "100vh",
        boxSizing: "border-box",
    };

    return (
        <main style={style}>
            <Header/>
            <h1>Welcome to our business site!</h1>
        </main>
    );
}

function DarkModeProvider({children}) {
    const [isDarkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(v => !v);
    const contextValue = {isDarkMode, toggleDarkMode};
    return (
        <DarkModeContext.Provider value={contextValue}>
            {children}
        </DarkModeContext.Provider>
    )
}

function App() {
    return (
        <DarkModeProvider>
            <Main/>
        </DarkModeProvider>
    )
}

export default App
