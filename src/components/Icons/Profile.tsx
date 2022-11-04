import './Profile.css';

const ProfileIcon = () => {
  return (
    <div className="flex ml-2">
      <div className="w-12 h-12 bg-[url('../assets/images.jpg')] bg-no-repeat"></div>
      <div className="flex-col">
        <div className="w-full text-lg">Hi, Jessica!!</div>
        <div className="text-xs">Mon, 19 Sep,2022</div>
      </div>
    </div>
  );
};

export default ProfileIcon;
