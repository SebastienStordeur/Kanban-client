import axios from "axios";

export function deleteTaskRequest(id, taskId, token, closeModal, update) {
  axios
    .delete(`https://super-clam-lingerie.cyclic.app/task/${id}`, {
      data: { id, taskId },
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => {
      closeModal();
      update();
    })
    .catch((err) => {
      console.error(err);
    });
}
