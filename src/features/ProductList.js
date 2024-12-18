import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './apiProductSlice';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  let content;
  if (status === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (status === 'succeeded') {
    content = products.map((product) => (


      <li key={product.id} className="bg-white rounded-lg shadow-md p-4">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.title} />
          <h2 className="text-lg font-bold mb-2">{products.title}</h2>
        </Link>
     <p className="text-green-600 font-bold">£{product.price}</p>
       </li>


    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div className="container mx-auto product">
      <h1>OtherProducts</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {content}
      </ul>
    </div>
  );
};

export default ProductList;
