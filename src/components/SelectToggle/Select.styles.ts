import styled from 'styled-components';
import { BsArrow90DegDown } from 'react-icons/bs';

export const Container = styled.div`
    position: relative;
    cursor: pointer;
    user-select: none;
`;

export const Button = styled.button`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    white-space: nowrap;
    border-radius: 0.375rem;
    background-color: #ffffff;
    padding: 0.5rem 1rem;
    text-align: start;
    font-size: 1rem;
    color: #4a5568;
    transition: all 0.3s;
    border: 1px solid black;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.49);
        color: #ffffff;
    }
`;

interface ArrowIconProps {
    isOpen: boolean;
}

export const ArrowIcon = styled(BsArrow90DegDown)<ArrowIconProps>`
    min-height: 15px;
    min-width: 15px;
    transition: all 0.075s;
    transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'none')};
`;

export const Dropdown = styled.div`
    position: absolute;
    left: 0;
    top: 2.25rem;
    border-radius: 0.375rem;
    background-color: #ffffff;
    padding: 0.375rem;
    font-size: 0.875rem;
    color: #4a5568;
    box-shadow:
        0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
