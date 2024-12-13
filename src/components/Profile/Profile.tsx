import classes from "./Profile.module.scss";

const Profile = () => {
  const user = {
    firstName: "firstName",
    lastName: "lastName",
    age: 20,
    image:
      "https://ionoto.ru/upload/medialibrary/a1f/tcs61nk83dig738gik8qtkcx6ue7sgek.png",
  };
  return (
    <div className={classes.wrap}>
      <img
        src={user.image}
        alt="профиль пользователя"
        width={200}
        style={{ width: "100px" }}
      />
      {user.firstName}
      {user.lastName[0]}
      {user.age}
    </div>
  );
};
export default Profile;
