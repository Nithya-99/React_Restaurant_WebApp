const Item = (props) => {
    return (
        <div className='container'>
            <div class="card justify-content-center">
                <img class="card-img-top" src={props.data.strCategoryThumb} alt="Card image cap"/>
                <div class="card-body">
                    <h3 class="card-title">{props.data.strCategory}</h3>
                    <p class="card-text">{props.data.strCategoryDescription}</p>
                    <button to={props.data.idCategory} class="btn btn-primary" onClick={()=>props.viewMore(props.data.strCategory)}>View More</button>
                </div>
            </div>
        </div>
    )
}
export default Item;