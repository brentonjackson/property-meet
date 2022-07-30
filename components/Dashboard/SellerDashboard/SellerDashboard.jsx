/* BuyerDashboard component
 * Dashboard for selling property
 * functions:
 *   - Lists all user's property
 *   - Add properties to sell
 */

function SellerDashboard(props) {
  const { currentUser, loggedIn } = props;
  return <div>hi {currentUser.name} im SellerDashboard</div>;
}
