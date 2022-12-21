import React, {createContext, useState} from "react";

export const ThemeContext = createContext ();

const ThemeContextProvider = props => {

    const [theme, setTheme] = useState(4)
    const [numberPage, setNumberPage] = useState([])

    const changePage = el => {
        setNumberPage(el.target.value)
    }
   

    return (
        <ThemeContext.Provider value={{theme, numberPage, changePage}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;