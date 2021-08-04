import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Cart.css'

export default function Cart(props) {
    const loc = useLocation();
    const [flag, setFlag] = useState(false)
    const [total, setTotal] = useState(0)
    let cartData = JSON.parse(localStorage.getItem('cart'));
    // useEffect(() => {
    //     console.log(cart); // result: '/secondpage'
    //  }, [cart]);

    function totalAmount() {
        let sum = 0
        cartData.forEach(element => {
            sum = sum + (Number(element.idMeal) - 52000)

        });
        setTotal(sum)
    }
    if(cartData != null){
        const items = cartData.map((data) => {
            return (
                <div className='container'>
                    <div class="card justify-content-center">
                        <img class="card-img-top" src={data.strMealThumb} alt="Card image cap" />
                        <div class="card-body">
                            <h4>Price: {Number(data.idMeal) - 52000}</h4>
                            <h4 class="card-title">{data.strMeal}</h4>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <h1 className='text-center'>Cart</h1>
                <div>{items}</div><br />
                <div>
                    <button className='btn btn-lg btn-success checkOut' onClick={() => totalAmount()}>Check out</button>
                    <h1 className='bg-warning text-center' id='amount'>{total} Rs</h1>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className='row'>
                <div className='col-sm-12'>
                    <h1 className='noOrder text-center'>Cart is Empty!</h1>
                </div>
            </div>
        )
    }
}