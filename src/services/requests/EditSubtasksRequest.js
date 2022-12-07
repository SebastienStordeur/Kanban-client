import axios from "axios";

export function editSubtasksRequest(id, subtasks, token) {
  axios
    .put(
      "http://localhost:8000/task/subtasks",
      { id, subtasks },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res) => {
      console.log(res);
      //need actualisation board
    })
    .catch((err) => console.log(err));
}
