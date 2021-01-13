import React, {useContext} from 'react';
import {myContext} from '../contextAPI';

export default function Home(){
    const context = useContext(myContext);

    return(
        <div>
            {context}
        </div>
    );
}