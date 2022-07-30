function HomePage(props) {
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
          />
          <WindowTab
            show={true}
            onTabClick={onTabClick}
            currentTab={currentTab}
            tabName="Login"
            content={UserLogin}
          />
        </Window>
      </div>
    </div>
  );
}
