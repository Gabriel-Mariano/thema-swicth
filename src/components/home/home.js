import React, {useContext} from 'react';
import {myContext} from '../contextAPI';

import {FaToggleOff,FaToggleOn}from 'react-icons/fa';

export default function Home(){
    const {thema,setThema} = useContext(myContext);

    function handleToggle(){
        if(thema === 'light'){
            setThema('dark');
        }else{
            setThema('light');
        }
    }
   
    return(
        <div className='content'
                style={ thema === 'light' ? {
                    
                    background:'#f8f8f8'
                } :{
                    background:'#000'
                }       
            }
        
        >
            <button onClick={handleToggle}>
                {thema === 'light' ?
                    <FaToggleOff></FaToggleOff>
                    :
                    <FaToggleOn></FaToggleOn>
                }
            </button>
        </div>
    );
}