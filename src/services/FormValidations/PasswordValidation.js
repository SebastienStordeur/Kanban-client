export const passwordValidation = (password, setError, setMessage) => {
  if (password.length < 8) {
    setError(true);
    setMessage("Password should be at least 8 characters long");
  } else {
    setError(false);
    setMessage("");
  }
};
