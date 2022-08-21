// components
import { Header, Footer } from 'components';

const Default = ({ activeMenu, children }) => {
  return (
    <>
      <Header activeMenu={activeMenu} />
      <div className='main-site'>{children}</div>
      <Footer />
    </>
  );
};

export default Default;
