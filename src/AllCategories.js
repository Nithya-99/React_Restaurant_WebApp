import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllCategories.css'
import { Link } from 'react-router-dom';

export default function AllCategories() {
    const [allCategories, setallCategories] = useState([])
    const [showAllCategory, setShowAllCategory] = useState(true)

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(res => {
            setallCategories(res.data.categories);
        }).catch(err => {
            console.log(err)
        })
    }, []);

    const allData = allCategories.map((data) => {
        if (showAllCategory) {
            return (
                <div className='container'>
                    <div className="card justify-content-center">
                        <Link to={{ pathname: `/Categories/${data.strCategory}`, state: { category: data.strCategory } }}>
                            <img className="card-img-top" src={data.strCategoryThumb} alt="Card image cap" />
                        </Link>
                        <div className="card-body">
                            <h3 className="card-title">{data.strCategory}</h3>
                            <p className="card-text">{data.strCategoryDescription}</p>
                        </div>
                    </div>
                </div>
            )
        }
    })

    return (
        <div>
            {allData}
        </div>
    )
}
