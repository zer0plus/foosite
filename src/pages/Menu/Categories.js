import React from 'react';
import {BtnWrapper, CategoryBtn} from './CategoryElements';

const Categories = ({ categories, filterItems }) => {
    return (
        <BtnWrapper>
            {categories.map((category, index) => {
                return (
                    <CategoryBtn type="button" key={index}
                    onClick={() => filterItems(category)}>
                    {category}
                    </CategoryBtn>
                );
            })}
        </BtnWrapper>
    );
};

export default Categories