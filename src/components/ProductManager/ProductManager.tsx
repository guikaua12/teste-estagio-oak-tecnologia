import ProductList from '../ProductList/ProductList.tsx';
import { useState } from 'react';
import { Product } from '../../types/Product.ts';
import ProductRegisterForm from '../ProductRegisterForm/ProductRegisterForm.tsx';
import { Container, OrderDirWrapper } from './ProductManager.styles.ts';
import OrderDir from '../OrderDir/OrderDir.tsx';
import { SelectItem } from '../SelectToggle/Select.tsx';

type SortDirection = 'asc' | 'desc';

const ProductManager = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const sortDirections = {
        asc: () => {
            setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
        },
        desc: () => {
            setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
        },
    };

    const addProduct = (product: Product) => {
        setProducts((prev) => [...prev, product]);
    };

    const handleOrderDirChange = (dir: SelectItem) => {
        const sortFunction = sortDirections[dir.value as SortDirection];
        sortFunction();
    };

    return (
        <Container>
            <OrderDirWrapper>
                <OrderDir defaultValue="wda" handleChange={handleOrderDirChange} />
            </OrderDirWrapper>
            <ProductList products={products} />
            <ProductRegisterForm addProduct={addProduct} />
        </Container>
    );
};

export default ProductManager;
