import { ComponentProps } from 'react';
import { Product as ProductType } from '../../types/Product.ts';
import { TableData, TableRow } from './Product.styles.ts';

interface ProductProps extends ComponentProps<'tr'> {
    product: ProductType;
}

const Product = ({ product, ...rest }: ProductProps) => {
    return (
        <TableRow {...rest}>
            <TableData>{product.name}</TableData>
            <TableData>{product.price}</TableData>
        </TableRow>
    );
};

export default Product;
