/* BuyerDashboard component
 * Dashboard for selling property
 * functions:
 *   - Lists all user's property
 *   - Add properties to sell
 */

function SellerDashboard(props) {
  const {
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
