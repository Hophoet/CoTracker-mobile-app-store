
import React from 'react'
import mockup from '../static/images/mockup.png'
import mockup2 from '../static/images/mockup2.png'
import shoe from '../static/images/s.jpg'
import watch from '../static/images/watch.jpg'

class Caroucel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div  className="carousel slide" data-ride='carousel'  style={{zIndex:1}}>
                <ul className="carousel-indicators" >
                    <li data-target="#demo" data-slide-to="0" class=""></li>
                    <li data-target="#demo" data-slide-to="1" class=""></li>
                    <li data-target="#demo" data-slide-to="2" class="active"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={watch} alt="Los Angeles" style={{ width:'100%', height:'100%'}} />  
                    </div>
                    <div className="carousel-item">
                        <img src={shoe}  alt="Chicago" style={{ width:'100%', height:'100%'}} />
                    </div>
                    <div className="carousel-item active">
                        <img src={mockup}  alt="New York" style={{ width:'100%', height:'100%'}}/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
                </a>
            </div>


         );
    }
}
 
export default Caroucel;