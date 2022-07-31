/* BuyerDashboard component
 * Dashboard for buying property
 * functions:
 *   - Search for properties
 *   - Add properties to wishlist
 *   - Display user's wishlist
 *   - Display all properties user is able to buy ✅
 */

function BuyerDashboard(props) {
  const { currentUser, properties, currentTab, users } = props;
  return (
    <div>
      <PropertiesList
        users={users}
        properties={properties}
        currentUser={currentUser}
        currentTab={currentTab}
      />
    </div>
  );
}
