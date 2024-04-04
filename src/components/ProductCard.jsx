
const ProductCard = ({ imageUrl, productName, productId, productPrice }) => {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        {/* Product Image */}
        <img 
            src={imageUrl}
            alt={productName} 
            className="h-80 w-72 object-cover rounded-t-xl" 
            width={500}
            height={500}
        />
        <div className="px-4 py-3 w-72">
            {/* Product Name */}
            <p className="text-lg font-bold text-gray-700 truncate block capitalize text-center">{productName}</p>
            {/* Product Id */}
            <p className="text-sm font-bold text-gray-700 truncate block my-1 capitalize text-center">{productId}</p>
            {/* Product Price */}
            <p className="text-lg font-semibold text-[#796357] cursor-auto text-center">{productPrice}</p>
        </div>
    </div>
  )
}

export default ProductCard