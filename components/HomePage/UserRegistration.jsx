/* UserRegistration component
 * Registration form
 * functions:
 *   - Displaying registration form ✅
 *   - Validating form input ❌
 *   - Updating user data in localstorage ✅
 *   - Updating users state ✅
 *   - Redirecting to login page once registered ✅
 */

function UserRegistration(props) {
  const useState = React.useState;
  const useEffect = React.useEffect;

  const { setUsers, userId, setUserId, setCurrentTab } = props;
  useEffect(() => {
    console.log("new id: ", userId);
  }, [userId]);
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

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
  // Handling the confirm password change
  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
    setSubmitted(false);
  };

  // Handling the confirm password change
  const handleCheckbox = (e) => {
    setCheckbox(e.target.checked);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === "" ||
      !checkbox
    ) {
      setError(true);
    } else {
      // update user data in localstorage
      let oldUsers = JSON.parse(localStorage.getItem("users"));
      console.log("old users: ", oldUsers);
      const newUser = {
        _userID: userId,
        name: name,
        email: email,
        password: password,
        isAdmin: false,
      };
      console.log("adding user: ", newUser);
      const newUsers = [...oldUsers, newUser];
      localStorage.setItem("users", JSON.stringify(newUsers));
      console.log("new users: ", JSON.parse(localStorage.getItem("users")));
      // update users state and userId number
      setUsers(() => newUsers);
      console.log("old id: ", userId);
      setUserId(userId + 1);
      setSubmitted(true);
      setError(false);

      // redirect to login page
      setTimeout(() => {
        setCurrentTab("Login");
      }, 2000);
    }
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
        <span>User {name} successfully registered!!</span>
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
        <span>Please enter all the fields</span>
      </div>
    );
  };
  return (
    // <div>
    //   <h2>Sign Up</h2>
    //   <p>Please fill in this form to create an account!</p>
    //   <hr />
    //   <form onSubmit={onSubmit} action="" name="SignUpForm">
    //   </form>
    // </div>
    <div className="form">
      <div>
        <h2>User Registration</h2>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input
          autoComplete="name"
          onChange={handleName}
          className="input"
          value={name}
          type="text"
        />

        <label className="label">Email</label>
        <input
          autoComplete="email"
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />

        <label className="label">
          Password (*please no sensitive info for this demo)
        </label>
        <input
          autoComplete="new-password"
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <label className="label">Confirm Password</label>
        <input
          autoComplete="new-password"
          onChange={handlePasswordConfirm}
          className="input"
          value={passwordConfirm}
          type="password"
        />

        <br />
        <input
          type="checkbox"
          onChange={handleCheckbox}
          className="input"
          value={checkbox}
        />
        <label> I accept the Terms of Use and Privacy Policy</label>
        <br />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
