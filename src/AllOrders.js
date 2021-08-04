import { useLocation } from "react-router-dom";
import './AllOrders.css'

export default function Orders() {
    const loc = useLocation();
    let orderData;
    if(localStorage.getItem("order") === null){
        orderData = null
    }
    else{
        orderData = JSON.parse(localStorage.getItem('order'));
        // [{"food":"Beef Dumpling Stew","total":873,"quantity":"1","price":873,"link":"https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg","address":"3/3 D-4 Varuna CHS LTD, Sector-6, Nerul, Navimumbai-400706"},{"food":"Christmas Pudding Trifle","total":1978,"quantity":"2","price":989,"link":"https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg","address":"204, C-Wing, Shastri Nagar chs ltd, Dharavi, Mumbai 400017"}]
    }
    if (orderData != null) {
        const orders = orderData.map((data) => {
            return (
                <div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <img className="card-img" src={data.link} alt="Card image cap" />
                            </div>
                            <div className='col-sm-9'>
                                <h4 class="card-title"><b>Dish: </b> {data.food}</h4>
                                <h4><b>Quantity:</b> {data.quantity}</h4>
                                <h4><b>Price:</b> {data.price} Rs</h4>
                                <h4><b>Total:</b> {data.total} Rs</h4>
                                <h4><b>Address:</b> {data.address}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <h1 className='text-center'>All Orders</h1>
                {orders}
            </div>
        )
    }
    else {
        return (
            <div className='row'>
                <div className='col-sm-12'>
                    <h1 className='noOrder text-center'>No Orders Yet!</h1>
                </div>
            </div>
        )
    }



    // if(loc.state != null) {
    //     let total = loc.state.total;
    //     let quantity = loc.state.quantity;
    //     let address = loc.state.address;
    //     let food = loc.state.food;
    //     let price = loc.state.price;
    //     let link = loc.state.link;
    //     return (

    //     )
    // }else{
    //     return (
            
    //     )
    // }
}