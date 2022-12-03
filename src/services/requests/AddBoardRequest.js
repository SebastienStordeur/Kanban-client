import axios from "axios";

export function AddBoardRequest(request, token, onAdd, onClick) {
  axios
    .post(
      "http://localhost:8000/board",
      {
        title: request.title,
        columns: request.columns,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((board) => {
      onAdd((prev) => [...prev, board.data]);
      onClick();
    })
    .catch((err) => console.error(err));
}
