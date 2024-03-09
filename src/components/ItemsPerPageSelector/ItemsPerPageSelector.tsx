import React, { ChangeEvent } from 'react';
import { SelectStyled } from './ItemsPerPageSelector.styled';

interface ItemsPerPageSelectorProps {
    value: number;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  }

const ItemsPerPageSelector = ({ value, onChange }: ItemsPerPageSelectorProps) => {
  return (
    <SelectStyled value={value} onChange={onChange}>
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
    </SelectStyled>
  );
};

export default ItemsPerPageSelector;
