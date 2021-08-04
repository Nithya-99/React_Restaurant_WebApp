// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// https://www.themealdb.com/api/json/v1/1/categories.php

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllCategories.css'
import { Redirect, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export default function Category(props) {
    const [category, setCategory] = useState([])
    const cart = []
    let [cartFlag, setCartFlag] = useState(false)

    const loc = useLocation();
    let link = loc.state.category;


    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + link).then(res => {
            setCategory(res.data.meals);
        }).catch(err => {
            console.log(err)
        })
    }, []);

    function addToCart(data) {
        if (cart.includes(data)) {
            swal({
                title: "Already added to cart",
                icon: "warning",
                button: "OK",
            });
        } else {
            cart.push(data)
            console.log(cart)
            localStorage.setItem('cart', JSON.stringify(cart))
            swal({
                title: "Added to cart successfully!",
                icon: "success",
                button: "OK",
            });
            setCartFlag(true)
        }

    }
    const categoryData = category.map((data, index) => {
        return (
            <div className='container'>
                <div class="card justify-content-center">
                    <img class="card-img-top" src={data.strMealThumb} alt="Card image cap" />
                    <div class="card-body">
                        <Link to={{ pathname: '/Order', state: { food: data.strMeal, len: category.length, index: data.idMeal, link: data.strMealThumb } }}>
                            <button className='btn btn-small btn-success'>Order Now</button>
                        </Link>
                        <h4 class="card-title">{data.strMeal}</h4>
                    </div>
                </div>
            </div>
        )
    })
    // if (cartFlag) {
    //     return <Redirect to={{ pathname: '/Cart', state: {data: cart} }} />
    // } else {
    return (
        <div>
            {categoryData}
        </div>
    )
    // }
}
