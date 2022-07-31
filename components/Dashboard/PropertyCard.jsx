/* PropertyCard component
 * Card of property
 * functions:
 *   - Display passed in property as a card ✅
 *   - Add onclick event that redirects to a more detailed property listing page
 *   - Styling of card ✅
 */

function PropertyCard(props) {
  const useEffect = React.useEffect;
  const {
    users,
    currentUser,
    property,
    propertyId,
    setPropertyId,
    properties,
    setProperties,
    currentTab,
    addProperty,
  } = props;

  const getOwner = () => {
    let id = property.owner;
    console.log("users: ", users);
    for (let index = 0; index < users.length; index++) {
      if (users[index]._userID === id) {
        return "Owner: " + users[index].name;
      }
    }
    return "Owner: ";
  };

  //   useEffect(() => {
  //     console.log("adding property card", property);
  //     console.log(" property image: ", property.imgUrl);
  //   }, []);

  return !addProperty ? (
    <div className="property-card">
      <img
        src={property.imgUrl}
        alt="property picture"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        }}
      />
      <h3>{property.location}</h3>
      <span>{getOwner()}</span>
      <br />
      <span>{"Price: " + property.price}</span>
    </div>
  ) : (
    <div className="property-card">
      <img
        src={
          "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        alt="property picture"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        }}
      />
      <h2>Add Property</h2>
    </div>
  );
}
