import axios from "axios";
import { getBoardRequest } from "./GetBoardRequest";

export function editBoardRequest(request, token, close, setBoard) {
  axios
    .put(
      `http://localhost:8000/board/${request.id}`,
      {
        id: request.id,
        title: request.title,
        columns: request.columns,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(() => {
      getBoardRequest(request.id, token, setBoard);
      close();
    })
    .catch((err) => {
      console.err(err);
    });
}
