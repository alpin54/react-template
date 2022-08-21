import { Button } from 'components';

const HeroBannerItem = ({ data }) => {
  return (
    <div className='hero-banner__item'>
      <div className='container'>
        <div className='hero-banner__wrapper'>
          <div className='hero-banner__img'>
            <img
              className='hero-banner__img__el'
              src={data.image}
              alt='Virtual healthcare for you'
            />
          </div>
          <div className='hero-banner__txt'>
            <h2 className='hero-banner__title'>{data.title}</h2>
            <p className='hero-banner__desc'>{data.desc}</p>
            <div className='hero-banner__btn'>
              <Button type='link' to='/consult'>
                Consult today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerItem;
