import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio';

class MainPage extends Component {

    render() {
        return (
            <div>
                <Header data={this.props.data.resumeData.main}/>
                <About data={this.props.data.resumeData.main}/>
                <Resume data={this.props.data.resumeData.resume}/>
                <Portfolio data={this.props.data.resumeData.portfolio}/>
                <Testimonials data={this.props.data.resumeData.testimonials}/>
                <Contact data={this.props.data.resumeData.main}/>
                <Footer data={this.props.data.resumeData.main}/>
            </div>
        )
    }
}

export default MainPage