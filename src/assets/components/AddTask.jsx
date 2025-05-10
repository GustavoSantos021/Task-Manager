import { useState } from "react";
import Input from "./Input"; 

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Write task name"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Write task description..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Fill in the title and description fields");
          }
          onAddTaskSubmit(title, description);
          setTitle(""); // limpar campo após adicionar
          setDescription(""); // limpar campo após adicionar
        }}
        className="bg-emerald-400 text-white border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;