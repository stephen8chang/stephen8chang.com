import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
         <div className="text-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Carousel thumbWidth={0} width={'100%'}>
                <div style={{width:300,marginLeft:"auto",marginRight:"auto"}}>
                    <img src="https://i.imgur.com/s7zvCCE.jpg" />
                    <p className="legend1">Legend 1</p>
                </div>
                <div style={{width:300,marginLeft:"auto",marginRight:"auto"}}>
                    <img src="https://i.imgur.com/PolZoW5.jpg" />
                    <p className="legend2">Legend 2</p>
                </div>
                <div style={{width:300,marginLeft:"auto",marginRight:"auto"}}>
                    <img src="https://i.imgur.com/Lub4L6j.jpg" />
                    <p className="legend3">Legend 3</p>
                </div>
                <div style={{width:300,marginLeft:"auto",marginRight:"auto"}}>
                    <img src="https://i.imgur.com/b7jvKyv.jpg" />
                    <p className="legend3">Legend 4</p>
                </div>
                <div style={{width:300,marginLeft:"auto",marginRight:"auto"}}>
                    <img src="https://i.imgur.com/NRWatXU.jpg" />
                    <p className="legend3">Legend 5</p>
                </div>
                <div style={{width:300,marginLeft:"auto",marginRight:"auto"}}>
                    <img src="https://i.imgur.com/6BlSX7R.jpg" />
                    <p className="legend3">Legend 6</p>
                </div>
                <div style={{width:300,marginLeft:"auto",marginRight:"auto"}}>
                    <img src="https://i.imgur.com/zu7WLWz.jpg" />
                    <p className="legend3">Legend 7</p>
                </div>
            </Carousel>
         </div>
      </section>
    );
  }
}

export default Testimonials;
