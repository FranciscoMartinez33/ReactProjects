import { useEffect, useState } from "react";
import axios from "axios";


/*
 
    var rand = 0;*/
    
    /*const handleMove = async (direc) => {
       const res = await axios.get(direc);

       
        if(res.data.accuracy !== 100) {
            var random = Math.floor((Math.random() * 100) + 1);
           
            if(random < res.data.accuracy){
                setRlife(rlife - res.data.power);
            }
        } else {
            /*rand = Math.floor((Math.random() * 4) + 1);
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



export const pokeInfo =  {
    tryGetHp: (character) => {
        try {
            const hp = character.stats[0].base_stat;
            return hp;
        } catch (error) {
            return error;
        }
    },

    tryGetMoves: (character) => {
       
        try {
            const moves = character.moves.slice(0,4);
            return moves;
        } catch (error) {
            return  error;
        }
    }
};

export const tryGetMove = async (url) => {
    try {
        const res = await axios (url);
        return res.data;
    } catch (error) {
        return error;
        
    }
};