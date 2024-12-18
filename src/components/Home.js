import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addToCart } from '../features/cartSlice';
import { fetchProducts } from '../features/ProductSlice';
import Products  from './flowerProducts';

const Home = () => {

  const dispatch = useDispatch();
  // const navigate = useNavigate();

//to display action coming generated products
 const {products, status} = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //this will run when the add to cart button is clicked
const handleAddToCart = (product) => {
  dispatch(addToCart(product));
  // navigate("/cart");
}

  return (
    <div className="container mx-auto">
    {status === "success" ? (
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <li key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <h2 className="text-sm font-bold my-4">{product.title.slice(0, 25)}...</h2>
            <div className='flex justify-between align-middle text-sm'>
               <button className="text-green-600 font-bold cursor-default">${product.price}</button>
            <button onClick={() => handleAddToCart(product)} className=" ">Add To Cart</button>
            </div>
          </li>
        ))}
      </ul>

    ) : status === "pending" ? (
      <p>Loading...</p>
    ) : (
      <p>Unexpected error occured...</p>
    )}

  {/*this is coming from the fakestore api*/}
      </div>
  );
};

export default Home;
