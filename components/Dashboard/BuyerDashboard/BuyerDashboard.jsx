/* BuyerDashboard component
 * Dashboard for buying property
 * functions:
 *   - Search for properties
 *   - Add properties to wishlist
 *   - Display user's wishlist
 */

function BuyerDashboard(props) {
  const { currentUser, loggedIn } = props;
  return <div>hi {currentUser.name} im buyer dashboard</div>;
}
