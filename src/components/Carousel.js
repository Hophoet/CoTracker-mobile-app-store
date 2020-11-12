import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import mockup from '../static/images/mockup.png'
import mockup2 from '../static/images/mockup2.png'
import m1 from '../static/images/m1.png'
import m2 from '../static/images/m2.png'
import m3 from '../static/images/m3.png'
import m4 from '../static/images/m4.png'
import m5 from '../static/images/m5.png'

class CustomCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
      
    render() { 
        console.log(this.state)
        return ( 
            
      
                <Carousel>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={m1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>Spash screen with amazing animation on the globe</p>
                        <a className="btn btn-outline-danger" href={this.props.apk} >Download</a>
                    </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={m2}
                            alt="First slide"
                            style={{width:50, height:'100%'}}
                        />
                        <Carousel.Caption>
                            <p>Countries informations loading</p>
                            <a className="btn btn-outline-danger" href={this.props.apk} >Download</a>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={m3}
                            alt="First slide"
                            style={{width:50, height:'100%'}}
                        />
                        <Carousel.Caption>
                            <p>screen when the countries informations loading failed</p>
                            <a className="btn btn-outline-danger" href={this.props.apk} >Download</a>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={m4}
                            alt="First slide"
                            style={{width:50, height:'100%'}}
                        />
                        <Carousel.Caption>
                            <p>Loaded countries (all countries)</p>
                            <a className="btn btn-outline-danger" href={this.props.apk} >Download</a>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={m5}
                            alt="First slide"
                            style={{width:50, height:'100%'}}
                        />
                        <Carousel.Caption>
                            <p>Press on one countrie to see more COVID-19 informations of this country </p>
                            <a className="btn btn-outline-danger" href={this.props.apk} >Download</a>

                        </Carousel.Caption>
                        
                    </Carousel.Item>
                
                </Carousel>
        
         );
    }
}
 
export default CustomCarousel;


// <Carousel>
// <Carousel.Item interval={1000}>
//     <img
//     className="d-block w-100"
//     src="holder.js/800x400?text=First slide&bg=373940"
//     alt="First slide"
//     />
//     <Carousel.Caption>
//     <h3>First slide label</h3>
//     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
// </Carousel.Item>

// </Carousel>