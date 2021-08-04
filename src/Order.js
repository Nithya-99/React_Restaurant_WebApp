import { Component, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, useLocation } from "react-router-dom";
import './Feedback.css'
import { Link } from 'react-router-dom';
import { render } from "@testing-library/react";


export function Order() {
    const loc = useLocation();
    let name = loc.state.food;
    let price = Number(loc.state.index)-52000;
    let link = loc.state.link;
    let [Flag, setFlag]=useState(false)

    let [total, setTotal] = useState(0);

    const [quantity, setQuantity] = useState(null);
    const [address, setAddress] = useState('');

    const [eQuantity, setEQuantity] = useState('');
    const [eAddress, setEAddress] = useState('');

    const [qColor, setQColor] = useState('');
    const [aColor, setAColor] = useState('');

    function validate(event) {
        let qFlag = false;
        let aFlag = false;
        
        event.preventDefault();
        if (quantity == '' | quantity < 1) {
            setQColor('red');
            setEQuantity('Quantity should be atleast 1');
        } else {
            setQColor('green');
            setEQuantity('');
            qFlag = true;
        }
        if (address == '') {
            setAColor('red');
            setEAddress('Please Enter your address');
        } else {
            setAColor('green');
            setEAddress('');
            aFlag = true;
        }
        if (qFlag && aFlag) {
            setFlag(true)
            console.log(Flag)
            orderSummary(quantity, price)
        }
    }
    function orderSummary(quantity, price) {
        setTotal(quantity * price);
    }
    if(Flag){
        return <Redirect to={{ pathname: '/Summary', state: { total: total, quantity: quantity, address: address, food: name, price:price, link:link} }}/>
    }
    else{
        return (
            <div className='form'>
                <form className='form1' onSubmit={validate} action='/Summary'>
                    <h3 align='center'>Order Details</h3>
                    <div class="container">
                        <input type="text" placeholder="Food" value={name} name="food" id="food" required />

                        <input type="text" placeholder="Price" value={price + ' Rs'} name="price" id="price" required />

                        <input type="number" placeholder="Quantity" name="quantity" id="quantity" onChange={event => setQuantity(event.target.value)} style={{ borderColor: qColor }} />
                        <p className='error'>{eQuantity}</p>

                        <textarea placeholder="Address" name="address" id="address" onChange={event => setAddress(event.target.value)} style={{ borderColor: aColor }}>
                        </textarea>
                        <p className='error'>{eAddress}</p>

                        <div class="clearfix">
                            <button class="btn btn-lg" name="feedback" type='submit'>Confirm Order</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    
    
}
export default Order