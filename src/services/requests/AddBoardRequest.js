import axios from "axios";

export function AddBoardRequest(request, token, onAdd, onClick, setError) {
  axios
    .post(
      "https://super-clam-lingerie.cyclic.app/board",
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
      setError(false);
    })
    .catch((err) => {
      console.error("ERROR", err);
      if (err.message === "Title can't be empty") {
        setError(true);
      }
    });
}
