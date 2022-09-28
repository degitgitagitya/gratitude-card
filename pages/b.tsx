import Layout from '../components/Layout';
import BIllustration from '../public/b.png';

import type { NextPage } from 'next';

const B: NextPage = () => {
  return (
    <Layout
      name='Faqih Muhammad'
      trait='Solutif'
      illustration={BIllustration}
      description={[
        'Selalu memiliki solusi dalam diskusi.',
        'Mengarahkan pendapat pendapat yang kurang tepat demi kelancaran kelompok.',
      ]}
    />
  );
};

export default B;
