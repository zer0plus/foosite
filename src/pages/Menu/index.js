import React, { useState } from 'react'
import Home from '../index'
import items from './MockData';
import MenuMain from './MenuMain';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const Menu = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    return (
        <>
            <Home />
            <MenuMain items={menuItems} categories={categories} filterItems={filterItems} />
      </>
    )
}

export default Menu