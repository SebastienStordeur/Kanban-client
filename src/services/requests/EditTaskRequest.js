import axios from "axios";

export function editTaskRequest(id, request, token) {
  axios
    .put(
      "http://localhost:8000/task",
      { id, task: request },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
