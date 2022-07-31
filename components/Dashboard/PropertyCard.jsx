/* PropertyCard component
 * Card of property
 * functions:
 *   - Display passed in property as a card
 *   - Add onclick event that redirects to a more detailed property listing page
 *   - Styling of card
 */

function PropertyCard(props) {
  const useEffect = React.useEffect;
  const {
    currentUser,
    property,
    propertyId,
    setPropertyId,
    properties,
    setProperties,
    currentTab,
  } = props;

  useEffect(() => {
    console.log("adding property card", property);
  }, []);

  {
    return (
      <div className="property-card">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="property picture"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
          }}
        />
        <h2>{property.location}</h2>
      </div>
    );
  }
}
