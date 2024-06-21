import { Children, ComponentProps, ReactElement, useEffect, useState } from 'react';
import { ArrowIcon, Button, Container, Dropdown } from './Select.styles.ts';
import OutsideClickDetector from '../../hooks/useOutsideClick.tsx';

export type SelectItem = {
    label: string;
    value: string;
};

interface Props extends ComponentProps<'div'> {
    handleChange?: (value: SelectItem) => void;
    placeholder?: string;
    shouldCallHandleChange?: boolean;
}

export default function Select({
    children,
    handleChange = (_: SelectItem) => {},
    placeholder,
    shouldCallHandleChange = false,
}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<SelectItem | null>(null);

    const handleRootClick = (e: any) => {
        setIsOpen((prevState) => !prevState);

        const target = e.target;
        const targetAttributes = target.attributes;

        if (!targetAttributes['data-select-item']) return;

        const label = targetAttributes['data-label'].value;
        const value = targetAttributes['data-value'].value;
        setSelected({ label, value });
        handleChange({ label, value });
    };

    const handleOutsideClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const defaultSelectedIndex = Children.toArray(children).findLastIndex(
            (child) => (child as ReactElement).props.selected
        );
        const defaultSelected = Children.toArray(children)[defaultSelectedIndex] as ReactElement;

        if (defaultSelected) {
            const item: SelectItem = { label: defaultSelected.props.children, value: defaultSelected.props.value };
            setSelected(item);
            if (shouldCallHandleChange) handleChange(item);
        }
    }, [children, handleChange, shouldCallHandleChange]);

    return (
        <OutsideClickDetector callback={handleOutsideClick}>
            <Container onClick={handleRootClick} data-open={isOpen}>
                <Button>
                    {selected?.label || placeholder}
                    <ArrowIcon isOpen={isOpen} />
                </Button>
                {isOpen && <Dropdown>{children}</Dropdown>}
            </Container>
        </OutsideClickDetector>
    );
}
