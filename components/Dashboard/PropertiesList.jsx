/* PropertiesList component
 * Container for propery cards
 * functions:
 *   - Holder of all properties
 *   - filters the properties to be rendered
 *      - wrapped in useEffect to automatically update when state changes
 */

function PropertiesList(props) {
  const {
    users,
    currentUser,
    propertyId,
    setPropertyId,
    properties,
    setProperties,
    currentTab,
  } = props;

  /***************** Filtering Logic **************************************/

  const buyFilter = (property) => {
    let userProperties = new Set(currentUser.properties);
    console.log("user properties: ", userProperties);
    // add to filtered list if property is not in set

    return !userProperties.has(property._propertyID);
  };
  const sellFilter = (property) => {
    let userProperties = new Set(currentUser.properties);
    console.log("user properties: ", userProperties);
    // add to filtered list if property is not in set

    return userProperties.has(property._propertyID);
  };

  /********************************************************************/

  const propertyCards = properties
    .filter(currentTab === "Buy" ? buyFilter : sellFilter)
    .map((property) => {
      console.log("propertyCards function: ", properties);
      return (
        <PropertyCard
          users={users}
          currentUser={currentUser}
          property={property}
          key={property._propertyID}
          propertyId={propertyId}
          setPropertyId={setPropertyId}
          properties={properties}
          setProperties={setProperties}
          currentTab={currentTab}
        />
      );
    });

  return (
    <div className="propertiesList">
      {propertyCards}
      {currentTab === "Sell" ? (
        <PropertyCard
          currentUser={currentUser}
          propertyId={propertyId}
          setPropertyId={setPropertyId}
          properties={properties}
          setProperties={setProperties}
          currentTab={currentTab}
          addProperty={true}
        />
      ) : (
        // <AddPropertyForm
        //   currentUser={currentUser}
        //   propertyId={propertyId}
        //   setPropertyId={setPropertyId}
        //   properties={properties}
        //   setProperties={setProperties}
        // />
        ""
      )}
    </div>
  );
}
