import axios from "axios";
import { getBoardRequest } from "./GetBoardRequest";

export function editSubtasksRequest(id, subtasks, token, boardId, setBoard) {
  axios
    .put(
      "https://super-clam-lingerie.cyclic.app/task/subtasks",
      { id, subtasks },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(() => {
      getBoardRequest(boardId, token, setBoard);
    })
    .catch((err) => console.log(err));
}
