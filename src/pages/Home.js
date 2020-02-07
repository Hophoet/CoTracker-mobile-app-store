import logo from '../logo.svg';
import '../App.css';
import '../static/css/index.css'
import '../static/css/carousel.css'
import 'bootstrap/dist/css/bootstrap.css'

// import 'bootstrap/js/src/carousel'


// import 'bootstrap/scss/'

import Carousel from '../components/Caroucel'

function App() {
  return (
    <div className="home__container">
      <h1>CoTracker</h1>
      <Carousel/>
    </div>
  );
}

export default App;
