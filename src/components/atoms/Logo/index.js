import trafalgar from 'assets/img/logo/trafalgar.svg';
import trafalgarText from 'assets/img/logo/trafalgar-text.svg';

const Logo = ({ className, name = 'trafalgar' }) => {
  const imageData = {
    trafalgar: trafalgar,
    'trafalgar-text': trafalgarText
  };

  return <img className={className} src={imageData[name]} alt={name} />;
};

export default Logo;
