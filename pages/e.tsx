import Layout from '../components/Layout';
import EIllustration from '../public/e.png';

import type { NextPage } from 'next';

const E: NextPage = () => {
  return (
    <Layout
      name='Niken Rosiana'
      trait='Rajin'
      illustration={EIllustration}
      description={[
        '(Agak sedikit bias ke pekerjaan karena sudah kenal).',
        'Dari ceritanya yang selalu membimbing rekan tim nya.',
        'Dari kesehariannya yang selalu tekun dalam mengerjakan pekerjaannya',
        'Hal itu menjadikan pribadi yang rajin dan tekun dalam segala hal.',
      ]}
    />
  );
};

export default E;
