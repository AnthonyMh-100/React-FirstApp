import React from "react";
import { useState } from "react";
import { AddCategory , GifGrid} from "./components";
//import { GifGrid } from "./components/gifGrid";

export const GifExpertApp = () =>{
    const [categories, setcategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory )=>{

        if ( categories.includes(newCategory) ) return
         
        setcategories( [newCategory,...categories] );
    }
    return(
        <> 
          <h1>GifExpertApp</h1>
           <AddCategory 
           onNewCategory = {  onAddCategory }  
           />
              {
              
              categories.map( category =>(
                    <GifGrid  
                    category ={category}  
                    key={category}/>
                 )
               )
              
              }
          
            

        </>
    )
}