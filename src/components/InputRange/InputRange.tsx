import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const StyledRangeContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const StyledButton = styled.button`
  border: none;
  padding: 24px;
  border-radius: 8px;
`;

const StyledValue = styled.p`
    font-size: 4rem;
    margin: 0;
`;

const StyledUnit = styled.p`
    text-transform: uppercase;
    margin: 0;
`;

interface Props {
    label: string;
    value: number | undefined;
    onChange: (newValue: number | undefined) => void;
    unit: string;
    step?: number;
    min?: number;
  }

export default function InputRange({ label, value, onChange, unit, step = 1, min = 0 }: Props) {
    if (value === undefined) return null;

    const decrement = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();

        if ((value - step) >= min) {
            onChange(value - step);
        }
    };

    const increment = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onChange(value + step);
    }

    return (
        <>
            <p>{label}</p>
            <StyledRangeContainer>
                <StyledButton onClick={decrement} disabled={value <= min}><FaMinus/></StyledButton>
                <div>
                    <StyledValue>{value}</StyledValue>
                    <StyledUnit>{unit}</StyledUnit>
                </div>
                <StyledButton onClick={increment}><FaPlus/></StyledButton>
            </StyledRangeContainer>
        </>
    );
}