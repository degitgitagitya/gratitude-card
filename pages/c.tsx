import Layout from '../components/Layout';
import CIllustration from '../public/c.png';

import type { NextPage } from 'next';

const C: NextPage = () => {
  return (
    <Layout
      name='Septian Tri Kristanto'
      trait='Singkat dan Tepat'
      illustration={CIllustration}
      description={[
        'Singkat dalam berdiskusi, tapi sekalinya menyampaikan ide, ide tersebut tepat sasaran.',
        'Hal itu dapat membantu kelompok di situasi yang kritis.',
      ]}
    />
  );
};

export default C;
