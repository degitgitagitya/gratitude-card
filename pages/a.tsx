import Layout from '../components/Layout';
import AIllustration from '../public/a.png';

import type { NextPage } from 'next';

const A: NextPage = () => {
  return (
    <Layout
      name='Siti Sukriyah'
      trait='Teliti'
      illustration={AIllustration}
      description={[
        'Selalu berantusias dan memperhatikan hal yang detail ketika berdiskusi di kelompok',
        'Meluruskan hal yang kecil dimana hal kecil tersebut ber-impact terhadap kemajuan kelompok.',
      ]}
    />
  );
};

export default A;
