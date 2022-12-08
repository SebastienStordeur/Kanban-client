import axios from "axios";

export function sendLoginRequest(email, password, setError) {
  try {
    axios
      .post(
        "https://super-clam-lingerie.cyclic.app//user/login",
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
