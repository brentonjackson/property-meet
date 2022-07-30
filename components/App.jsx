function App() {
  const [currentTab, setCurrentTab] = React.useState("Home");
  let onTabClick = (e) => {
    console.log("clicked!");
    console.log(e);
    setCurrentTab(e.target.innerHTML);
  };

  // User Functionality
  let loggedIn = true;

  return (
    <Window className="view" currentTab={currentTab} onTabClick={onTabClick}>
      <WindowTab
        show={true}
        onTabClick={onTabClick}
        currentTab={currentTab}
        tabName="Home"
        content={HomePage}
      />
      <WindowTab
        show={loggedIn}
        onTabClick={onTabClick}
        tabName="Buy"
        content={BuyerDashboard}
        currentTab={currentTab}
      />
      <WindowTab
        show={loggedIn}
        onTabClick={onTabClick}
        tabName="Sell"
        content={SellerDashboard}
        currentTab={currentTab}
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
