import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {
    // switch

    switch (action.type) {
        case "YELLOW":
            return {...state, color: "yellow"}
        case "BLUE":
            return {...state, color: "blue"}
        default:
            return state;
    }
}

export const TitleColorContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(titleColorReducer, {color:'#DB4A2E'});
    
    return(
        <TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )
}