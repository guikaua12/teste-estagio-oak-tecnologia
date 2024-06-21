import { ReactNode } from 'react';
import { Button } from './Option.styles.ts';

type Props = {
    children?: ReactNode;
    value: any;
    selected?: boolean;
};

export default function Option({ children, value, selected = false }: Props) {
    return (
        <Button data-select-item={selected} data-label={children} data-value={value}>
            {children}
        </Button>
    );
}
