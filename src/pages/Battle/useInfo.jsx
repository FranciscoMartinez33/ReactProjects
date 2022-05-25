import { useEffect, useState } from "react";

export const useInfo = (character) => {
    const [move, setMoves] = useState([]);
    const [life, setLife] = useState(0);

    const getInfo = () => {
        let moves = character.moves.slice(0,4);
        setMoves(moves);
        let hp = character.stats.find(base_stat => base_stat.stat.name === 'hp');
        setLife(hp);
       
    }

    useEffect (()=> {
        getInfo();
    }, [character]);

    return [ move, life];
   
/*
    var moves2 = !data2 ? data2 : data2.moves.slice(0, 4);
    setRmove(moves2);
    var hp2 = !data2 ? data2 : data2.stats.slice(0, 1);
    setRlife(hp2.map(item => { return (item.base_stat) }));


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

    const rattack = async (rand) => {
        const result = await axios.get(rmove[rand].url);
        return result.data;
    };

    useEffect(() => {

    }, [rattack(rand)]);

   /* useEffect(() => {

    }, [handleMove]);*/
};

export default useInfo;