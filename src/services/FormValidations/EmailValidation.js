import { emailRegex } from "../../utils/Regex/regex";
import { passwordValidation } from "./PasswordValidation";

export function formValidation(email, setEmailError, setEmailMessage, password, setPasswordError, setPasswordMessage) {
  if (email.trim() === "") {
    setEmailError(true);
    setEmailMessage("Email can't be empty");
    passwordValidation(password, setPasswordError, setPasswordMessage);
    return false;
  } else if (email.trim() !== "" && !emailRegex.test(email)) {
    setEmailError(true);
    setEmailMessage("Wrong email format");
    passwordValidation(password, setPasswordError, setPasswordMessage);
    return false;
  } else {
    setEmailError(false);
    setEmailMessage("");
    if (!passwordValidation(password, setPasswordError, setPasswordMessage)) return;
    return true;
  }
}
