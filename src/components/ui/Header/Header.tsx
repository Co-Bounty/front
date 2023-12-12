import Button from '@components/common/Button/Button';

const Header = () => {
  return (
    <div className={'flex justify-between items-center w-full h-16 mt-6'}>
      <div className={'text-white text-3xl font-bold'}>Co-Bounty</div>
      <Button content={'메뉴'} />
    </div>
  );
};

export default Header;
