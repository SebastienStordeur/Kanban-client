export const passwordValidation = (password, setError, setMessage) => {
  if (password.trim() === "") {
    setError(true);
    setMessage("Can't be empty");
    return false;
  } else if (password.trim().length < 8) {
    setError(true);
    setMessage("Your password should be at least 8 caracters long");
    return false;
  } else {
    setError(false);
    setMessage("");
    return true;
  }
};
