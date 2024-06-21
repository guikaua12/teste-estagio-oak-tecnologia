import { ComponentProps } from 'react';
import { Product } from '../../types/Product.ts';
import Input from '../Input/Input.tsx';
import { Form } from './ProductRegisterForm.styles.ts';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button.tsx';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface ProductRegisterFormProps extends ComponentProps<'form'> {
    addProduct: (product: Product) => void;
}

const ProductRegisterSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    price: z.number().min(1),
    availableToSale: z.boolean(),
});

type ProductRegisterSchemaType = z.infer<typeof ProductRegisterSchema>;

const ProductRegisterForm = ({ addProduct, ...rest }: ProductRegisterFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductRegisterSchemaType>({
        resolver: zodResolver(ProductRegisterSchema),
    });

    return (
        <Form onSubmit={handleSubmit(addProduct)} {...rest}>
            <Input placeholder="Nome" {...register('name')} />
            <Input placeholder="Descrição" {...register('description')} />
            <Input placeholder="Valor" type="number" {...register('price', { valueAsNumber: true })} />
            <Input placeholder="Venda" type="checkbox" {...register('availableToSale')} />
            <Button>Cadastrar</Button>
        </Form>
    );
};

export default ProductRegisterForm;
