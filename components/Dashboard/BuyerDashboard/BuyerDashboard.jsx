/* BuyerDashboard component
 * Dashboard for buying property
 * functions:
 *   - Search for properties
 *   - Add properties to wishlist
 *   - Display user's wishlist
 */

function BuyerDashboard(props) {
  const { currentUser, properties, currentTab } = props;
  return (
    <div>
      <PropertiesList
        properties={properties}
        currentUser={currentUser}
        currentTab={currentTab}
      />
    </div>
  );
}
