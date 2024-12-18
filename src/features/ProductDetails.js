import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  setProduct,
} from "../features/ProductSlice"

export const baseUrl = "https://fakestoreapi.com/products"
const ProductDetails = () => {
  const { productId } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [ productDetails, setProductDetails] = useState({});
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.products.find(p => p.id === parseInt(productId)));


  useEffect(() => {
    getProductDetails();
  }, [productId]);

  const {
title,
price,
description,
catergory,
rating,
  } = productDetails;

const getProductDetails = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${baseUrl}productdetails/${productId}`);
      const data = await res.json();
      setProductDetails(data);
      setIsLoading(false);
      dispatch(setProduct(data));
    } catch (error) {
      setIsLoading(false);
      // console.log(error);
    }
  };



  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.title} className="w-64 h-64 object-contain mx-auto mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">${price}</p>
      <p className="mb-4">{description}</p>
      <div className="flex items-center justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-l-lg" disabled={product.quantity === 1}>
          -
        </button>
        <span className="mx-2">{catergory}</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg" disabled={product.quantity === 10}>
          +
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
