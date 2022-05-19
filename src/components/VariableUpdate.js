import {useState , useEffect} from 'react'




function Updatefunct() {
    const [calcul , setCalcul]= useState(0);
    const[cnt, setCnt]= useState(0);

    useEffect(()=> {
        setCalcul(()=> calcul * 2 )
    } , [calcul])
    return  (<>
         <h1> Hello youssef {calcul} </h1>
         <button onClick= {setCalcul}> </button>
         </>
         
        )
            
}
export default Updatefunct