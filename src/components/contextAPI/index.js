/* eslint-disable react-hooks/rules-of-hooks */
import React, {createContext, useState} from 'react';

export const myContext = createContext();

export default function myContextProvider({children}){
    const [thema,setThema] = useState('light');
    return(
        <myContext.Provider value={{thema,setThema}}>
            {children}
        </myContext.Provider>
    );
}