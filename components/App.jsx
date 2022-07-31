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
      properties: [0],
    },
    {
      _userID: 1,
      name: "Brent",
      email: "b",
      password: "b",
      isAdmin: false,
      properties: [0, 1],
    },
  ];
  // save users state
  const [users, setUsers] = useState(usersArr);

  // userId used to assign each user to a different number
  const [userId, setUserId] = useState(2);

  // save users to local storage
  localStorage.setItem("users", JSON.stringify(users));

  // user schema:
  //   _userID: 0,
  //   name: "",
  //   email: "",
  //   password: "",
  //   isAdmin: false,
  //   properties: [] // list of property ids belonging to user

  const [currentUser, setCurrentUser] = useState({});
  // keep track of whether a user is logged in
  const [loggedIn, setLoggedIn] = useState(false);

  /********************************************************/

  /***************** Properties Functionality ***********************/

  // Properties array
  let propertiesArr = [
    {
      _propertyID: 0,
      location: "521 Hank Aaron Dr SW",
      price: "800k",
      owner: 0,
      imgUrl: "./img/img1.jpeg",
    },
    {
      _propertyID: 1,
      location: "2400 Zebulon Road",
      price: "990k",
      owner: null,
      imgUrl: "./img/img2.jpeg",
    },
    {
      _propertyID: 2,
      location: "9231 Bolton Road",
      price: "785k",
      owner: null,
      imgUrl: "./img/img3.jpeg",
    },
    {
      _propertyID: 3,
      location: "5840 Monroe Ave",
      price: "1.1m",
      owner: 1,
      imgUrl: "./img/img4.jpeg",
    },
    {
      _propertyID: 4,
      location: "5674 Thimble Blvd",
      price: "450k",
      owner: 1,
      imgUrl: "./img/img5.jpeg",
    },
  ];

  // propertyId used to assign each property a different number
  const [propertyId, setPropertyId] = useState(5);

  // save users state
  const [properties, setProperties] = useState(propertiesArr);

  // save properties to local storage
  localStorage.setItem("properties", JSON.stringify(properties));

  // property schema:
  // _propertyID: 0,
  // location: "",
  // price: "",
  // owner: 0 // owner is owner's _userId number

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
          users,
          currentUser,
          properties,
          currentTab,
        }}
      />
      <WindowTab
        show={loggedIn}
        onTabClick={onTabClick}
        tabName="Sell"
        content={SellerDashboard}
        currentTab={currentTab}
        tabComponentProps={{
          users,
          currentUser,
          propertyId,
          setPropertyId,
          properties,
          setProperties,
          currentTab,
        }}
      />
    </Window>
  );
}
