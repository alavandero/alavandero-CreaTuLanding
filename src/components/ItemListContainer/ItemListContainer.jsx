import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import {getProductos, getProductosByCategory} from '../../firebase/db';

function ItemListContainer() {
  const [items,setItems] = useState([])
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getProductosByCategory(id).then(res => setItems(res))
    } else {
      getProductos().then(res => setItems(res))
    }
  }, [id])

  return (
    <ItemList items={items} />
 )
}
export default ItemListContainer;
