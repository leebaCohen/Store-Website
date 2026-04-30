import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { products as localProducts } from './products';
import buttonstyles from './Button.module.css';
import headerstyles from './Header.module.css';
import navstyles from './NavBar.module.css';
import productstyles from './Product.module.css';


interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

function ProductDetails() {
    const {productId} = useParams();
    const navigateTo = useNavigate();

    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const findProduct = () => {
            const found = localProducts.find(p => p.id === Number(productId));
            
            setProduct(found || null);
            setIsLoading(false);
        };

        findProduct();
    }, [productId]); 

    if (isLoading) return <div>Searching...</div>;
    if (!product) return <div>Product not found!</div>;


    const handleClick = () => {
        navigateTo('/');
    }

    return (
        <>
       <header className={headerstyles.header}>
                <h2 className={headerstyles.h2}>Product Details</h2>
                <nav className={navstyles.navbar}>
                    <ul className={navstyles.navLinks}>
                        <li ><a href="/">Home</a></li>
                        <li ><a href="/products">Products</a></li>
                        <li ><a href="/about">About</a></li>
                    </ul>
                </nav>
            </header>
        <main className={productstyles.container}>
            <h2>{product?.name}</h2>
            <h6>Description: {product?.description}</h6>
            <h6>Price: ${product?.price.toFixed(2)}</h6>
            <img src={`/images/${product?.image}`} alt={product?.name} />
        </main>
        <button className={buttonstyles.base} onClick={handleClick}>
            Return to Home Page
        </button>
        </>
    )
}

export default ProductDetails;