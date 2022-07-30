/* WindowTab component
 * the individual tab of the window
 * functions:
 *   - rendering the active in the window editor
 *   - passing down props to the component it's rendering
 */

function WindowTab(props) {
  const [tabComponent, tabName, currentTab, tabComponentProps] = [
    props.content,
    props.tabName,
    props.currentTab,
    props.tabComponentProps,
  ];

  return (
    <div>{currentTab == tabName ? tabComponent(tabComponentProps) : ""}</div>
  );
}
