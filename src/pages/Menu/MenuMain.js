import React from 'react'
import Categories from './Categories';
// import './template.css';
import { MenuTitle, Underline, MenuH2, MenuWrapper, ItemHead, ItemText, ItemTitle, ItemTitleP, MenuWrapperCenter, MenuArticle, ItemImg } from './MenuElements';

const MenuMain = ({ items, categories, filterItems }) => {
    return (
        <MenuWrapper>
            <MenuTitle>
                <MenuH2>Our Menu</MenuH2>
                <Underline></Underline>
            </MenuTitle>
            <Categories categories={categories} filterItems={filterItems} />
            <MenuWrapperCenter>
                {items.map((menuItem) => {
                    const { id, title, img, desc, price } = menuItem;
                    return (
                        <MenuArticle key={id}>
                            <ItemImg src={img} alt={title}/>
                            <div>
                                <ItemHead>
                                    <ItemTitle>{title}</ItemTitle>
                                    <ItemTitleP className='price'>${price}</ItemTitleP>
                                </ItemHead>
                                <ItemText>{desc}</ItemText>
                            </div>
                        </MenuArticle>
                    );
                })}
            </MenuWrapperCenter>
        </MenuWrapper>
    )
}

export default MenuMain