import DropDown from '@components/common/DropDown/DropDown';

const Header = () => {
  return (
    <div className={'flex justify-between items-center w-full h-16 mt-6'}>
      <div className={'text-white text-3xl font-bold'}>Co-Bounty</div>
      <DropDown />
    </div>
  );
};

export default Header;
