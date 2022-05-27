import React, { useEffect, useState } from 'react'
import { tryGetMove } from '../pages/Battle/useInfo';

const Moves = ({ moves }) => {
    const [ acuracy, setAcuracy ] = useState(0);
    const [ power, setPower ] = useState(0);
        
    const handleAction = (url) => {
        const move = tryGetMove(url);
        if(move.accuracy === 100) {
            setPower(move.power);
        }else{
            console.log("no es 100");
        }
    };
    
    useEffect(()=>{
    
    },[handleAction()]);
   /* const handleAction = async (direc) => {
        const res = await axios.get(direc);
 
        
         if(res.data.accuracy !== 100) {
             var random = Math.floor((Math.random() * 100) + 1);
            
             if(random < res.data.accuracy){
                 setRlife(rlife - res.data.power);
             }
         } else {
             rand = Math.floor((Math.random() * 4) + 1);
             setTimeout(() => {console.log(data.name + ` uso ${rmove[rand].name}`)}, 3000);
             let attack = rattack(rand);
                 
                     
                     if(attack.accuracy !== 100) {
                         random = Math.floor((Math.random() * 100) + 1);
                        
                         if(random < attack.accuracy){
                             setLife(life - attack.power);
                         }
                     }else{
                         setLife(life - attack.power);
                     }
                 
 
      
             
         }setRlife(rlife - res.data.power);
   
        
     };
*/
    return (
        <>

            {moves.map(item => {

                return (
                    <>
                        <div >
                            <button onClick={ handleAction(item.move.url) } >{item.move.name} </button>
                        </div>
                    </>
                )
            })}
        </>

    )
};

export default Moves;