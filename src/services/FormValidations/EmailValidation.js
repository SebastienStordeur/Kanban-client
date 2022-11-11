import { emailRegex } from "../../utils/Regex/regex";

export const emailValidation = (email, setError, setMessage) => {
  if (email.trim() === "") {
    setError(true);
    setMessage("Email can't be empty");
  } else if (email.trim() !== "" && !emailRegex.test(email)) {
    setError(true);
    setMessage("Wrong email format");
  } else {
    setError(false);
    setMessage("");
  }
};
