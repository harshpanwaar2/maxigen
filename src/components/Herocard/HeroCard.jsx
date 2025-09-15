import React from 'react';
import PropTypes from 'prop-types';
import './heroCard.css'; 

const HeroCard = ({
  // Yahan default values set karein
  tag = 'ONE DAY ONLY',
  title = '20% OFF',
  subtitle = 'ALL GYM SUPPLEMENTS',
  buttonText = 'Shop Now',
  buttonLink = '#',
  productImage, //
  backgroundImage
}) => {
  
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <div className="hero-card " style={cardStyle}>
      <div className="card-content">
        <span className="tag">{tag}</span>
        
        <h2 className="discount-title">{title || '20% OFF'}</h2>
        <p className="subtitle">{subtitle || 'ALL GYM SUPPLEMENTS'}</p>
        <a href={buttonLink} className="cta-button">
          {buttonText}
        </a>
      </div>
      {productImage && <img src={productImage} alt={subtitle} className="product-image" />}
    </div>
  );
};

HeroCard.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string, 
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  productImage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired
};



export default HeroCard;