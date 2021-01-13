import React, {createContext} from 'react';

export const myContext = createContext();

export default function myContextProvider({children}){
    return(
        <myContext.Provider value='Hello World'>
            {children}
        </myContext.Provider>
    );
}