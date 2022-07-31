/* HomePage component
 * functions:
 *   - Rendering AboutSection component ✅
 *   - Rendering UserRegistration and UserLogin components in their own subwindow on the page ✅
 *   - passing down user props to login and registration components ✅
 */

function HomePage(props) {
  const {
    users,
    setUsers,
    userId,
    setUserId,
    currentUser,
    setCurrentUser,
    loggedIn,
    setLoggedIn,
  } = props;
  const setCurrentHomeTab = props.setCurrentTab;

  const [currentTab, setCurrentTab] = React.useState("Register");
  let onTabClick = (e) => {
    console.log(e.target.innerHTML + " clicked!");
    setCurrentTab(e.target.innerHTML);
  };

  return (
    <div className="home">
      <AboutSection />
      <div className="user-container">
        <Window
          className="users"
          editorClass="user"
          currentTab={currentTab}
          onTabClick={onTabClick}
        >
          <WindowTab
            show={true}
            onTabClick={onTabClick}
            currentTab={currentTab}
            tabName="Register"
            content={UserRegistration}
            tabComponentProps={{ setUsers, userId, setUserId, setCurrentTab }}
          />
          <WindowTab
            show={true}
            onTabClick={onTabClick}
            currentTab={currentTab}
            tabName="Login"
            content={UserLogin}
            tabComponentProps={{
              users,
              currentUser,
              setCurrentUser,
              loggedIn,
              setLoggedIn,
              setCurrentHomeTab,
            }}
          />
        </Window>
      </div>
    </div>
  );
}
