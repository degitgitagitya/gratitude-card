import Layout from '../components/Layout';
import DIllustration from '../public/d.png';

import type { NextPage } from 'next';

const D: NextPage = () => {
  return (
    <Layout
      name='Jessica Analy'
      trait='Pekerja Keras'
      illustration={DIllustration}
      description={[
        'Mendengar cerita Bu Jessica, seperti mendengar cerita di novel dan sinetron.',
        'Ceritanya mengajarkan kita untuk selalu berusaha dan pantang menyerah di segala situasi.',
      ]}
    />
  );
};

export default D;
