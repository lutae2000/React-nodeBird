import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import {Button} from 'antd';
import { Overlay, Global, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator} from './style';


const ImageZoom = ({images, onClose}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <Overlay>
          <Global />
          <Header>
            <h1>상세 이미지</h1>
            <CloseBtn onClick={onClose} />
          </Header>
          <SlickWrapper>
            <div>
              <Slick
                initialSlide={0}
                beforeChange={(slide, newSlide) => setCurrentSlide(newSlide)}
                infinite
                arrows={false}
                slidesToShow={1}
                slidesToScroll={1}
              >
                {images.map((v) => (
                  <ImgWrapper key={v.src}>
                    <img src={v.src} alt={v.src} />
                  </ImgWrapper>
                ))}  
              </Slick>
              <Indicator>
                <div>
                  {currentSlide + 1}
                  /
                  {images.length}
                </div>
              </Indicator>
            </div>
          </SlickWrapper>
        </Overlay>
      );
    };
    
ImageZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    })).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImageZoom;