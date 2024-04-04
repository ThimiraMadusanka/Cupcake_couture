import ProductCard from './ProductCard'

const Products = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-16 bg-[#796357]" id="Products">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section Name */}
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-center text-4xl font-bold text-white">
                    CupCakes
                </h2>
                <p className="text-white pt-4 text-center w-9/12">
                    Indulge in the exquisite delight of our signature flavor cupcake, meticulously crafted to tantalize your taste buds 
                    with every blissful bite.
                </p>
            </div>
            {/* Products Section */}
            <div className="w-fit pt-14 pb-20 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14">
                <ProductCard 
                    imageUrl="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    productName="Lemon Zest"
                    productId="#10245"
                    productPrice="$20"
                />
                <ProductCard 
                    imageUrl="https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    productName="Chocolate Ganache"
                    productId="#10255"
                    productPrice="$14"
                />
                <ProductCard 
                    imageUrl="https://images.unsplash.com/photo-1620442513427-814e90d384e9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    productName="Salted Caramel"
                    productId="#10245"
                    productPrice="$25"
                />
                <ProductCard 
                    imageUrl="https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    productName="Matcha Green Tea"
                    productId="#10247"
                    productPrice="$18"
                />
                <ProductCard 
                    imageUrl="https://images.unsplash.com/photo-1595450648353-d16bb38772c9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    productName="Vanilla Bean"
                    productId="#20245"
                    productPrice="$23"
                />
                <ProductCard 
                    imageUrl="https://images.unsplash.com/photo-1612849599497-cfd1062eb65c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    productName="Red Velvet"
                    productId="#11245"
                    productPrice="$10"
                />
            </div>
        </div>
    </section>
  )
}

export default Products