/* eslint-disable react/prop-types */
import { useState } from "react";

function Add({ onAddTaskClick }) {
  // Use destructuring para acessar as props

  const [text, setText] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Título da tarefa"
        className="border-slate-300 outline-slate-400 px-2 py-2"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button
        onClick={() => {
          //verifica se o texto não é vazio
          if (!text.trim()) {
            return alert("Preencha todos os campos, seu bobo");
          }
          onAddTaskClick(text);
          setText("");
        }}
        className="bg-emerald-400 text-white p-2 rounded-md px-2 py-2"
      >
        Adicionar
      </button>
    </div>
  );
}

export default Add;
