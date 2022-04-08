import React from 'react';
import { ProductList } from '../helpers/ProductList';
import ProductItem from '../components/ProductItem';
import '../styles/Product/product.scss'

export default function Products() {
    return (
        <div className='product'>
            <h1 className='productTitle'> The Den Gaming Products</h1>
            <div className='productList'>{ProductList.map((productItem, key) => {
                return <ProductItem
                    key={key}
                    image={productItem.image}
                    name={productItem.name}
                    type={productItem.type} />
            })}</div>
        </div>
    )
}
