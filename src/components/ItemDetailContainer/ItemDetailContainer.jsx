import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getProducto} from '../../firebase/db';  

function ItemDetailContainer() {
  const [item,setItem] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getProducto(id).then(res => setDetail(res))
  }, [id])
  
  return (
    <ItemDetail detail={detail} />
  )
}

export default ItemDetailContainer;