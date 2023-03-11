import { createContext, useState } from "react";

export const MyContext = createContext()

export const MyContextProvider = ({anyComponent}) => {
    const [userName, setUserName] = useState() // My context Data

    //My Context Action
    const authenticate = (login) => {
        setUserName(login)
    }
}