import { products as localProducts } from './products.ts';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';  

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

export function HomePage() {

    const navigateTo = useNavigate();

    const navigateToPage  = (productId: number) => {
        navigateTo(`/products/${productId}`)
    }

    const [Products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        const loadProducts = () => {
            try {
                setProducts(localProducts);
            } catch (error) {
                console.error('Error loading products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadProducts();
    }, []); 

    if (isLoading) return <div>Loading...</div>;
    

        
    return (
        <>
            <header>
                <h2>Welcome to the Grocery Outlet</h2>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                {Products.map((product) => (
                    <button key={product.id} onClick={() => navigateToPage(product.id)}>
                        {product.name},
                         ${product.price.toFixed(2)},
                         <img src={`/images/${product.image}`} alt={product.name} />
                         </button>
                ))}
            </main>
        </>
    )
}