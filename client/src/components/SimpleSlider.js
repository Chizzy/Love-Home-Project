import React from "react";
import Slider from "react-slick";
 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3
    };
    return (
      <Slider {...settings}>
        <div>
        <img height="250" src="https://images.adsttc.com/media/images/5a6a/9ea0/f197/ccde/2400/072a/slideshow/5_DSC8768.jpg?1516936847" alt=""/>
        </div>
        <div>
          <img height="250" src="https://cdn.freshome.com/wp-content/uploads/2018/01/decorator-living.jpg" alt=""/>
        </div>
        <div>
        <img height="250" src="https://mk0jeffschlarb9esh18.kinstacdn.com/wp-content/uploads/2017/11/fillmore_st04_1920.jpg" alt=""/>
        </div>
        <div>
        <img height="250" src="https://media.architecturaldigest.com/photos/596fbe937530e857b503072d/master/w_768/Robbs_Hammel_002-2.jpg" alt=""/>
        </div>
        <div>
        <img height="250" src="https://nyocommercialobserver.files.wordpress.com/2018/08/0009_determinedbydesign_01_11_18_large.jpg?w=640&h=427" alt=""/>
        </div>
        <div>
          <img height="250" src="https://udemy-images.udemy.com/course/750x422/1136678_f12f_2.jpg" alt=""/>
        </div>
        <div>
        <img height="250" src="https://i.ytimg.com/vi/eHllaAyBQHM/maxresdefault.jpg" alt=""/>
        </div>
        <div>
          <img height="250" src="https://cdn.cliqueinc.com/cache/posts/252735/scandinavian-interior-design-ideas-252735-1521558937549-main.700x0c.jpg" alt=""/>
        </div>
        <div>
        <img height="250" src="https://tamaramagel.com/wp-content/uploads/2016/05/20160121_TAMARAMAGEL_SCARSDALE-100-768x533.jpg" alt=""/>
        </div>
        
      </Slider>
    );
  }
}


export default SimpleSlider;