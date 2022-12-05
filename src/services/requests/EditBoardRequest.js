import axios from "axios";

export function editBoardRequest(request, token) {
  axios.put(
    `http://localhost:8000/board/${request.id}`,
    {
      id: request.id,
      title: request.title,
      columns: request.columns,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}
