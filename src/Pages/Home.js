import { useState } from 'react';
import Main from '../components/Home/Main'
import Stock from '../components/Home/Stock';
import Special from '../components/Home/Special';
import Location from '../components/Home/Location';
import Article from '../components/Home/Articles';
import {Products} from '../Product'
import { Outlet } from 'react-router-dom';

const Home = ()=>{
  const [product, peoductSrate] = useState(Products);
  let stocks     = product.filter(prod=>prod.stock===1)
  let newProduct  = product.filter(prod=>prod.new ===1)
  let bought      = product.filter(prod=>prod.bought ===1)
    return <>
    <Outlet></Outlet>
    <Main></Main>
        <div className='page-content'>
          <Stock stocks = {stocks}
              newProduct={newProduct}
              bought={bought}  
          ></Stock>
          <Special></Special>
          <Location></Location>
          <Article></Article>
        </div>
    </>
}
export default Home