import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'; //Include Heder
import Footer from './Footer'; //Include Footer
import AllCategories from './AllCategories';
import SeaFood from './Category'

function App() {
  return (
    <div className="maincontainer">
    <Header></Header>
     <div className="container mb-5 mt-5">
      <AllCategories></AllCategories>
      {/* <SeaFood></SeaFood> */}
    </div>
    <div class="push"></div>
    <div className='footer'>
      <Footer></Footer>
    </div>
      
  </div>
  );
}

export default App;
