import React, {useContext, useState} from 'react'
import {faker} from '@faker-js/faker'
import './style.css'
import SingleProduct from './SingleProduct';
import { Cart } from '../context';

faker.seed(100);

function Home() {

    const {cart,setCart} = useContext(Cart)

    const productsArray = [...Array(20)].map((p) => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.avatar(),
      }));
   
  const [products] = useState(productsArray);

  return (
    <div className='productContainer'>
        {
            products.map((item,index) => (
               <SingleProduct prod={item}/>
            ))
        }
    </div>
  )
}

export default Home