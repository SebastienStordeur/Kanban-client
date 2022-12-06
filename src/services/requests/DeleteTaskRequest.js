import axios from "axios";

export function deleteTaskRequest(id, taskId, token, closeModal, update) {
  axios
    .delete(
      `http://localhost:8000/task/${id}`,
      { data: { id, taskId } },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(() => {
      closeModal();
      update();
    })
    .catch((err) => {
      console.error(err);
    });
}
