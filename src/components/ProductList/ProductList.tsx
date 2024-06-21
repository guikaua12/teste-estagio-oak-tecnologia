import { ComponentProps } from 'react';
import { Product } from '../../types/Product.ts';
import { Table, TableHeader, TableRow } from './ProductList.styles.ts';
import ProductComponent from '../Product/Product.tsx';

interface ProductListProps extends ComponentProps<'table'> {
    products: Product[];
}

const ProductList = ({ products, ...rest }: ProductListProps) => {
    return (
        <Table {...rest}>
            <thead>
                <TableRow>
                    <TableHeader>Nome</TableHeader>
                    <TableHeader>Valor</TableHeader>
                </TableRow>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ProductComponent key={product.name} product={product} />
                ))}
            </tbody>
        </Table>
    );
};

export default ProductList;
