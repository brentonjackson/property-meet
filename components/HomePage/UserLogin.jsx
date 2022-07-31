/* UserLogin component
 * Login form
 * functions:
 *   - Displaying login form ✅
 *   - Validating user login ✅
 *   - Updating current user state ✅
 *   - Check if already logged in (if so, display logout) ✅
 */

function UserLogin(props) {
  const useState = React.useState;
  const useEffect = React.useEffect;
  const {
    users,
    currentUser,
    setCurrentUser,
    loggedIn,
    setLoggedIn,
    setCurrentHomeTab,
  } = props;
  // check the current user evertime that changes
  useEffect(() => {
    console.log("current user: ", currentUser);
  }, [currentUser]);

  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else if (!validateEmail(email)) {
      // email not valid
      setError(true);
    } else {
      // check password goes with email
      if (validatePassword(email, password)) {
        // setCurrentUser(userInfo)
        setSubmitted(true);
        // setLoggedIn(true);
        setError(false);
        setTimeout(() => {
          setLoggedIn(true);
          setCurrentHomeTab("Buy");
        }, 2000);
      } else {
        setError(true);
      }
    }
  };
  // check if email is in users
  const validateEmail = (email) => {
    return users.filter((e) => e.email === email).length > 0;
  };
  // check if password corresponds to email
  const validatePassword = (email, password) => {
    let validUsers = users.filter((e) => e.email === email);
    // return true if one valid user has the same password as form
    for (let index = 0; index < validUsers.length; index++) {
      if (validUsers[index].password === password) {
        // set current user to this user
        setCurrentUser(validUsers[index]);
        return true;
      }
    }
    return false;
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <span>Logged in as: {currentUser.name} !!</span>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <span>Incorrect login information</span>
      </div>
    );
  };

  // Handling logout
  const handleLogout = () => {
    setCurrentUser({});
    setLoggedIn(false);
    // redirect to top of home page
    setCurrentHomeTab("Home");
  };

  return (
    <div className="form">
      <div>
        <h2>Login</h2>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      {loggedIn ? (
        <div>
          <span>Logged in as: {currentUser.name}</span>
          <button onClick={handleLogout} className="btn" type="submit">
            Logout
          </button>
        </div>
      ) : (
        <form>
          {/* Labels and inputs for form data */}

          <label className="label">Email</label>
          <input
            autoComplete="email"
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
          />

          <label className="label">Password</label>
          <input
            autoComplete="new-password"
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
          />

          <button onClick={handleSubmit} className="btn" type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  );
}
