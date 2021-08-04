import { Component } from "react"
import './Home.css'
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <main role="main" className="inner cover">
                <img src="https://assets.architecturaldigest.in/photos/60083aa7d0435267a8df8eec/master/w_1600%2Cc_limit/The-Brew-Chapter-bangalore-restaurant-pub_4-3.jpg"></img>

                <div className="caption">
                    <h1>Food Tastes Better When you Eat with your Family!</h1>
                </div>

            </main>
        )
    }
}

export default Home