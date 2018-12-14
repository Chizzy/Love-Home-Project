import React, { Component } from 'react';
import styled from 'styled-components'

const PhotoCarouselStyles = styled.div`
  .cards-slider {
      position: relative;
      max-width: 226px;
      margin: 0 auto;

  &:after {
      content: '';
      display: block;
      width: 100%;
      height: 264px;
      outline: 5px solid #61DAFE;
      position: absolute;
      top: 0;
      left: 0;
  }    
  }

`;


class HomePage extends Component {
    render() {
        return (
            <div>
                {/* These are the images for the homepage. Some of them are hyperlinks */}
            {/* Dont need this image <img width="100%" src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1574&q=80" alt="#"/>     */}
            <img width="100%" src="http://i65.tinypic.com/fz6ydz.png" alt=""/>
            <img width="100%" src="http://i65.tinypic.com/jue15u.png" alt=""/>
            <h1>Check out our Instagram inspiration feed!</h1>
            

{/* This is the code for the photocarousel for "instagram" */}
<PhotoCarouselStyles>
<div className="cards-slider">
  <div className="cards-slider-wrapper">
  <Card property={property} />
</div>
</div>
</PhotoCarouselStyles>





            </div>
            
            );
    }
}

export default HomePage;