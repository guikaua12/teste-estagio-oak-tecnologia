import SelectToggle from '../SelectToggle';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'div'> {
    handleChange: (value: any) => void;
}

export default function OrderDir({ handleChange, ...props }: Props) {
    return (
        <SelectToggle.Select handleChange={handleChange} placeholder="Ordem" {...props}>
            <SelectToggle.Option value="asc">Menor valor</SelectToggle.Option>
            <SelectToggle.Option value="desc">Maior valor</SelectToggle.Option>
        </SelectToggle.Select>
    );
}
