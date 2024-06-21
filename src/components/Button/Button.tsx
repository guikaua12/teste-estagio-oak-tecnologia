import { ComponentProps } from 'react';
import { StyledButton } from './Button.styles.ts';

const Button = ({ children, ...rest }: ComponentProps<'button'>) => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
