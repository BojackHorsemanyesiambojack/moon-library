import './Homepage.css';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';

function Homepage() {
  return (
    <div className="homepage">
      <div className='principal-page'>
      <div className='main-cont'>
        <Main />
      </div>
      <div className='footer'>
        <Footer />
      </div>
      </div>
    </div>
  );
}

export default Homepage;
