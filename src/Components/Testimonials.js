import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SpotifyPlayer from 'react-spotify-player';


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
      <>
      <section id="testimonials" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
         <div className="text-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Carousel thumbWidth={0} width={'100%'}>
                <div style={{width:300,marginLeft:"auto",marginRight:"auto"}}>
                    <img src="https://i.imgur.com/s7zvCCE.jpg" />
                    <p className="legend1" style={{ color: 'white' }}>Cooked 10 of these omelette plates for 10 of my friends; safe to say I got 10/10 positive reviews!</p>
                </div>
                <div style={{width:300,marginLeft:"auto",marginRight:"auto"}}>
                    <img src="https://i.imgur.com/PolZoW5.jpg" />
                    <p className="legend2" style={{ color: 'white' }}>Me as Jim O'Connor in The Glass Menagerie in Spring 2022!</p>
                </div>
                <div style={{width:300,marginLeft:"auto",marginRight:"auto"}}>
                    <img src="https://i.imgur.com/Lub4L6j.jpg" />
                    <p className="legend3" style={{ color: 'white' }}>Homemade Doenjang Jjigae (Korean Soybean Paste Soup)</p>
                </div>
                <div style={{width:300,marginLeft:"auto",marginRight:"auto"}}>
                    <img src="https://i.imgur.com/b7jvKyv.jpg" />
                    <p className="legend4" style={{ color: 'white' }}>Official publicity for The Glass Menagerie</p>
                </div>
                <div style={{width:300,marginLeft:"auto",marginRight:"auto"}}>
                    <img src="https://i.imgur.com/NRWatXU.jpg" />
                    <p className="legend5" style={{ color: 'white' }}>Homemade Jjimdak (Korean Braised Chicken) with Tteokboki</p>
                </div>
                <div style={{width:300,marginLeft:"auto",marginRight:"auto"}}>
                    <img src="https://i.imgur.com/6BlSX7R.jpg" />
                    <p className="legend6" style={{ color: 'white' }}>Polaroid of the cast on the set of the Glass Menagerie :D</p>
                </div>
                <div style={{width:300,marginLeft:"auto",marginRight:"auto"}}>
                    <img src="https://i.imgur.com/zu7WLWz.jpg" />
                    <p className="legend7" style={{ color: 'white' }}>Homemade Shakshuka (Maghrebi egg dish)</p>
                </div>
            </Carousel>
         </div>
      </section>
      <section id="testimonials2" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="text-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <SpotifyPlayer
                uri="spotify:playlist:6BysmgbS0HWaquvqFX3iiM?si=Yb5KlZ7jRnquoFxsNGFHeQ"
                size="large"
                them="black"
                view="list"
              />
        </div>
      </section>
      <section id="testimonials2" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="text-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        </div>
      </section>
      </>
    );
  }
}

export default Testimonials;
