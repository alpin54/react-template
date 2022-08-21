// dummy
import { bannerData } from 'assets/dummy';

// templates
import { Default } from 'container/templates';

// components
import { HeroBanner } from 'components';

function Home() {
  return (
    <Default activeMenu='home'>
      <HeroBanner data={bannerData} />
    </Default>
  );
}

export default Home;
