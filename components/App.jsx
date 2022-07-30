function App() {
  const useState = React.useState;
  const [currentTab, setCurrentTab] = useState("Home");

  let onTabClick = (e) => {
    console.log(e.target.innerHTML + " clicked!");
    setCurrentTab(e.target.innerHTML);
  };

  /***************** User Functionality ***********************/

  // Users array
  let usersArr = [
    {
      _userID: 0,
      name: "admin",
      email: "admin@test.com",
      password: "admin",
      isAdmin: true,
    },
  ];
  // save users state
  const [users, setUsers] = useState(usersArr);

  // userId used to assign each user to a different number
  const [userId, setUserId] = useState(1);
  // save users to local storage
  localStorage.setItem("users", JSON.stringify(users));

  // user schema:
  //   _userID: 0,
  //   name: "",
  //   email: "",
  //   password: "",
  //   isAdmin: false,

  const [currentUser, setCurrentUser] = useState({});
  // keep track of whether a user is logged in
  const [loggedIn, setLoggedIn] = useState(false);

  /********************************************************/

  return (
    <Window
      className="view"
      editorClass=""
      currentTab={currentTab}
      onTabClick={onTabClick}
      currentUser={currentUser}
    >
      <WindowTab
        show={true}
        onTabClick={onTabClick}
        currentTab={currentTab}
        tabName="Home"
        content={HomePage}
        tabComponentProps={{
          users,
          setUsers,
          userId,
          setUserId,
          currentUser,
          setCurrentUser,
          loggedIn,
          setLoggedIn,
          setCurrentTab,
        }}
      />
      <WindowTab
        show={loggedIn}
        onTabClick={onTabClick}
        tabName="Buy"
        content={BuyerDashboard}
        currentTab={currentTab}
        tabComponentProps={{
          currentUser,
          loggedIn,
        }}
      />
      <WindowTab
        show={loggedIn}
        onTabClick={onTabClick}
        tabName="Sell"
        content={SellerDashboard}
        currentTab={currentTab}
        tabComponentProps={{
          currentUser,
          loggedIn,
        }}
      />
      {/* <HomePage>
          <AboutSection />
          <Window>
            <UserRegistration />
            <UserLogin />
          </Window>
        </HomePage> */}
    </Window>
  );
}
