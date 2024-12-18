import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../features/apiProductSlice";
import { addToCart } from "../features/cartSlice";
import { Link } from 'react-router-dom';

const Products =  () => {

    const { data, error, isLoading } = useGetAllProductsQuery()
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (<main>
        { isLoading ? (<p>Loading</p>
        ) : error ? (<p> An error occured..</p>
        ) : (
        <>
         <div className="container mx-auto product mt-16 ">
      <h1>Other Products</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
     {data?.map((product) => (
      <li key={product.id} className="bg-white rounded-lg shadow-md p-4">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.title} className="h-32 w-full object-cover" />
          <h2 className="text-lg font-bold mb-2">{product.title.slice(0, 20)}...</h2>
        </Link>
        <div className='flex justify-between align-middle text-sm'>
           <button className="text-green-600 font-bold cursor-default ">£{product.price}</button>
       <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
       </li>
    ))}
      </ul>
    </div>

        </>
        )}
       </main>
       )

}
export default Products



