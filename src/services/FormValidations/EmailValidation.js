import { passwordValidation } from "./PasswordValidation";

const emailRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export function formValidation(email, setEmailError, setEmailMessage, password, setPasswordError, setPasswordMessage) {
  if (email.trim() === "") {
    setEmailError(true);
    setEmailMessage("Email can't be empty");
    passwordValidation(password, setPasswordError, setPasswordMessage);
    return;
  } else if (email.trim() !== "" && !emailRegex.test(email)) {
    setEmailError(true);
    setEmailMessage("Wrong email format");
    passwordValidation(password, setPasswordError, setPasswordMessage);
    return;
  } else {
    setEmailError(false);
    setEmailMessage("");
    if (!passwordValidation(password, setPasswordError, setPasswordMessage)) return;
    return true;
  }
}
