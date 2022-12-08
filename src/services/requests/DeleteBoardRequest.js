import axios from "axios";

export function deleteBoardRequest(id, token, navigate) {
  axios
    .delete(`https://super-clam-lingerie.cyclic.app/board/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => {
      navigate("/");
    })
    .catch((err) => {
      console.error(err);
    });
}
