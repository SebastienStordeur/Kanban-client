import axios from "axios";

export function getBoardRequest(id, token, setBoard, setAccessDenied) {
  axios
    .get(`http://localhost:8000/board/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((data) => {
      return setBoard(data.data);
    })
    .catch((err) => {
      console.error(err);
      if (err.response.status === 403) setAccessDenied(true);
    });
}
