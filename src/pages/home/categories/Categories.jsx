import React from 'react';
import men from '../../../assets/img/categories/men.png'
import women from '../../../assets/img/categories/women.png'
import tshirt from '../../../assets/img/categories/shirt.png'
import laptop from '../../../assets/img/categories/laptop.png'
import bag from '../../../assets/img/categories/bag.png'
import jacket from '../../../assets/img/categories/jacket.png'
import pen from '../../../assets/img/categories/shorts.png'
import shoes from '../../../assets/img/categories/shoes.png'
import { NavLink } from 'react-router-dom';

const Categories = () => {
    const categories = [
        {
            name: 'Men',
            img: men
        },
        {
            name: 'Women',
            img: women
        },
        {
            name: 'TShirt',
            img: tshirt
        },
        {   
            name: 'Laptop',
            img: laptop
        },
        {
            name: 'Bag',
            img: bag
        },
        {
            name: 'Jacket',
            img: jacket
        },
        {
            name: 'Pant',
            img: pen
        },
        {
            name: 'Shoes',
            img: shoes
        },
    ]
    return (
        <div className='mt-20 md:px-0'>
            <h2 className='sm:text-2xl text-xl mb-5 text-center sm:text-left'>Categories</h2>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {categories.map((cate, index) => <div key={index}>
                <NavLink to={`/category/${cate.name.toLocaleLowerCase()}`} className='cursor-pointer categories-container'>
                    <div className='bg-[#8f29a91e] flex flex-col items-center justify-center gap-4 rounded-[12px] px-2 py-10'>
                    <img className='w-[60px] mx-auto' src={cate.img} alt="" />
                    <h4 className='sm:text-lg text-sm text-center categories-name text-black'>{cate.name}</h4>
                    </div>
                </NavLink>
        </div>)}
        </div>
        </div>
    );
};

export default Categories;