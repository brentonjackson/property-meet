/* AddPropertyForm component
 * Form to add new property to sell
 * functions:
 *   - Displays form
 *   - Handles form submission
 *   - Updates global state of currentUser and properties
 */

function AddPropertyForm(props) {
  const { currentUser, propertyId, setPropertyId, properties, setProperties } =
    props;
  return (
    <div className="property-card">
      <div className="add-property-form"></div>
    </div>
  );
}
