import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class Carrousel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Carousel showThumbs={false}>
                <div>
                    <img src="https://images.unsplash.com/photo-1501197698593-0ccc1dfbd866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    <p className="legend">Vista casa</p>
                </div>
                <div>
                <img src="https://images.unsplash.com/photo-1567493756992-e2b6227cddc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    <p className="legend">Vista casa</p>
                </div>
                <div>
                <img src="https://images.unsplash.com/photo-1519378045141-f05b62faa055?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                    <p className="legend">Vista casa</p>
                </div>
            </Carousel>
        );
    }
}

export default Carrousel;