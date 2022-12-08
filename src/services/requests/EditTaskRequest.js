import axios from "axios";

export function editTaskRequest(id, request, token) {
  axios
    .put(
      "https://super-clam-lingerie.cyclic.app/task",
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
