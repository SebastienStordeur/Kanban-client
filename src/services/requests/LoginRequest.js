import axios from "axios";

export function sendLoginRequest(email, password, setError) {
  try {
    axios
      .post(
        "http://localhost:8000/user/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location.reload();
      })
      .catch(() => setError(true));
  } catch (err) {
    console.log(err);
  }
}
