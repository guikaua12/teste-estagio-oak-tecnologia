import { ComponentProps, forwardRef } from 'react';
import { Container } from './Input.styles.ts';

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>((props, ref) => {
    return <Container ref={ref} {...props}></Container>;
});

export default Input;
