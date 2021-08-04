import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Redirect, useLocation } from "react-router-dom";
import swal from "sweetalert";
import './Feedback.css'
import Order from './Order';
import './Summary.css'

export default function Summary() {
    const loc = useLocation();
    let total = loc.state.total;
    let quantity = loc.state.quantity;
    let address = loc.state.address;
    let food = loc.state.food;
    let price = loc.state.price;
    let link = loc.state.link;
    let data = {
        food: food,
        total: total,
        quantity: quantity,
        price: price,
        link: link,
        address:address
    }
    let order;
    if(localStorage.getItem('order') === null){
        order = [];
    }else{
        order = JSON.parse(localStorage.getItem('order'));
    }
    
    //let order=[...orderData]
    console.log(order)
    const [ok, setOk] = useState(false)

    function placeOrder(data) {
        order.push(data)
        console.log(order)
        localStorage.setItem('order', JSON.stringify(order))
        // order=orderData;
        // console.log(order)
        // localStorage.setItem('order', JSON.stringify(order))
        // console.log(orderDetails)
        // if (orderDetails.length == 0) {
        //     let orderData = JSON.parse(localStorage.getItem('order'));
        //     setOrderDetails(orderData)
        // }
        // else {
        //     order.push(data)
        //     setOrderDetails(order)
        //     localStorage.setItem('order', JSON.stringify(order))

        // }
        swal({
            title: "Order Placed Successfully!",
            text: "Enjoy Your Meal!",
            icon: "success",
            button: "OK",
        });
        document.getElementById('food').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('address').value = '';
        document.getElementById('total').value = '';
        setOk(true);
    }
    if (ok) {
        return <Redirect to={{ pathname: '/Orders', state: { total: total, quantity: quantity, address: address, food: food, price: price, link: link, address: address } }} />
    } else {
        return (
            <div className='form'>
                <form className='form1'>
                    <h3 align='center'>Summary</h3>
                    <div class="container">
                        <label className='text-left'>Food Item Selected</label>
                        <input type="text" placeholder="Food" value={food} name="food" id="food" required />

                        <label className='text-left'>Price</label>
                        <input type="number" placeholder="Price" value={price} id='price' />

                        <label className='text-left'>Total Quantity</label>
                        <input type="number" placeholder="Quantity" value={quantity} name="quantity" id="quantity" />

                        <label className='text-left'>Delivery Address</label>
                        <textarea placeholder="Address" value={address} name="address" id="address">
                        </textarea>

                        <label className='text-left'>Total Amount</label>
                        <input type="text" placeholder="Total" value={'Total: ' + total + ' Rs'} required id='total' />

                        <div class="clearfix">
                            <button class="btn btn-lg" type='button' onClick={() => placeOrder(data)}>Place Order</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
