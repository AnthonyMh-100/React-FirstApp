import { useState ,useEffect } from "react";
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
const [images , setimages] = useState([]);
const [isLoading , setIsLoading] = useState([]);

  //CREAMOS FUCNNION ASYNCRONA PARA CONSUMIR NUESTRA APID E GIFS
  const getImages = async()=>{
     const newImages = await getGifs(category);
      setimages(newImages);
      setIsLoading(false)
  }
 //PARA QUE NO VUELVA A RENDERIZAR PARA VECES DESPUES DEL LLAMAR AL ESTADO

  useEffect( ()=> {
    getImages();
  },[ ])

  return {
      images ,
      isLoading
  }
}
