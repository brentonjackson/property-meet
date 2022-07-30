function WindowTab(props) {
  let [tabComponent, tabName, currentTab] = [
    props.content,
    props.tabName,
    props.currentTab,
  ];

  return <div>{currentTab == tabName ? tabComponent() : ""}</div>;
}
