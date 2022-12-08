import axios from "axios";

export function getBoardsRequest(token, setBoards) {
  axios
    .get("https://super-clam-lingerie.cyclic.app/board", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => setBoards(response.data))
    .catch((err) => console.error(err));
}
