import axios from "axios";

export function sendLoginRequest(email, password) {
  try {
    axios.post("http://localhost:8000/user/login", {
      email,
      password,
    });
  } catch (err) {
    console.log(err);
  }
}
