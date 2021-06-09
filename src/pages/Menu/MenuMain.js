import React from 'react'
import Categories from './Categories';
import { MenuTitle, Underline, MenuH2 } from './MenuElements';

const MenuMain = ({ items, categories, filterItems }) => {
    return (
        <section className="menu section">
            <MenuTitle>
                <MenuH2>Our Menu</MenuH2>
                <Underline></Underline>
            </MenuTitle>
            <Categories categories={categories} filterItems={filterItems} />
            <div className='section-center'>
                {items.map((menuItem) => {
                    const { id, title, img, desc, price } = menuItem;
                    return (
                        <article key={id} className='menu-item'>
                            <img src={img} alt={title} className='photo' />
                            <div className='item-info'>
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className='price'>${price}</h4>
                                </header>
                                <p className='item-text'>{desc}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}

export default MenuMain