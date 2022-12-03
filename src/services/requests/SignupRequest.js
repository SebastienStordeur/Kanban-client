import axios from "axios";

export function sendSignupRequest(
  email,
  password,
  setIsSuccess,
  setMessage,
  formRef
) {
  axios
    .post(
      "http://localhost:8000/user/signup",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((res) => {
      if (res.status === 200) {
        setIsSuccess(true);
        setMessage("Your account has been created");
        formRef.current.reset();
      }
    })
    .catch((err) => {
      if (
        err.response.status === 400 &&
        err.response.data.message === "Email already used"
      ) {
        setIsSuccess(false);
        setMessage("Email already used");
      } else {
        setIsSuccess(false);
        setMessage("An error has occured while processing your form");
      }
    });
}
