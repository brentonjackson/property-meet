/* BuyerDashboard component
 * Dashboard for selling property
 * functions:
 *   - Lists all user's property
 *   - Add properties to sell
 */

function SellerDashboard(props) {
  const {
    users,
    currentUser,
    propertyId,
    setPropertyId,
    properties,
    setProperties,
    currentTab,
  } = props;
  return (
    <div>
      <div>
        <PropertiesList
          users={users}
          properties={properties}
          currentUser={currentUser}
          currentTab={currentTab}
          propertyId={propertyId}
          setPropertyId={setPropertyId}
          setProperties={setProperties}
        />
      </div>
    </div>
  );
}
