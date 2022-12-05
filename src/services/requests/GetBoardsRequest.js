import axios from "axios";

export function getBoardsRequest(token, setBoards) {
  axios
    .get("http://localhost:8000/board", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => setBoards(response.data))
    .catch((err) => console.error(err));
}
