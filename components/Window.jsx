/* Window component
 * holder for tabs and tab's content
 * functions:
 *   - keep track of current active tab in window ✅
 *   - know all the tabs in the window ✅
 *   - control size and styling of window ✅
 *   - render window content based on selected tab ✅
 */

function Window(props) {
  // list of windowTab components
  const tabs = props.children;
  let currentTab = props.currentTab;
  let onTabClick = props.onTabClick;

  return (
    <div className={props.className}>
      {/* Render tabs at top of window */}
      <div className="tabs">
        {tabs.map((child, index) =>
          child.props.show ? (
            <button
              key={index}
              className={currentTab == child.props.tabName ? "active" : ""}
              onClick={onTabClick}
            >
              {child.props.tabName}
            </button>
          ) : (
            ""
          )
        )}
      </div>
      {/* Render tab's content */}
      <div className={"editor " + props.editorClass + "editor"}>
        <div className="editor-content">{tabs}</div>
      </div>
    </div>
  );
}
