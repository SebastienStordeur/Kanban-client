import axios from "axios";
import { getBoardRequest } from "./GetBoardRequest";

export function addTaskRequest(request, token, setBoard, refresh) {
  axios
    .post(
      "http://localhost:8000/task",
      {
        id: request.id,
        task: {
          title: request.task.title,
          description: request.task.description,
          columnId: request.task.columnId,
          subtasks: request.task.subtasks,
        },
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(() => {
      getBoardRequest(request.id, token, setBoard);
      refresh();
    })
    .catch((err) => {
      console.error(err);
    });
}
