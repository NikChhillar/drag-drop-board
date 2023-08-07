import { useState } from "react";
import AddIcon from "./AddIcon";

const Board = () => {
  const [columns, setColumns] = useState([]);

  const createNewColumn = () => {};

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="m-auto flex gap-4">
        <div className="flex gap-4"></div>
        <button
          onClick={() => {
            createNewColumn();
          }}
          className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBackgroundColor border-2 border-columnBackgroundColor p-4 ring-rose-500 hover:ring-2 flex gap-2"
        >
          <AddIcon /> Add Column
        </button>
      </div>
    </div>
  );
};

export default Board;
