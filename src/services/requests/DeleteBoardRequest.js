import axios from "axios";

export function deleteBoardRequest(id, token, navigate) {
  axios
    .delete(`http://localhost:8000/board/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => {
      navigate("/");
    })
    .catch((err) => {
      console.error(err);
    });
}
