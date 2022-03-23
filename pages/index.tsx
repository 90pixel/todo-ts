import Textarea from 'components/Textarea';
import type { NextPage } from 'next';
import { styled } from 'stitches.config';

const Home: NextPage = () => {
  return (
    <div>
      <CustomButton>button</CustomButton>
      <Textarea placeholder={'yasin'} />
    </div>
  );
};

export default Home;

const CustomButton = styled('button', {
  background: '$gray800',
  radius: 4,
});
