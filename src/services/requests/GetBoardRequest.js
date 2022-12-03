import axios from "axios";

export function getBoardRequest(id, token, setBoard) {
  axios
    .get(`http://localhost:8000/board/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((data) => {
      return setBoard(data.data);
    })
    .catch((err) => console.log(err));
}
