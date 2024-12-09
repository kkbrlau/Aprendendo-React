import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const text = searchParams.get("text");

  return (
    <div className="w-full h-screen bg-emerald-400 flex flex-col items-center justify-center p-6 m">
      <div className="w-[500px] space-y-4">
        <div className="flex flex-row justify-center relative">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1>
          <button
            onClick={() => navigate(-1)} //volta
            className="absolute left-0 text-white bg-slate-200 rounded-md font-bold mt-2 "
          >
            VOLTAR
          </button>
        </div>

        <div className="bg-slate-200 p-4 rounded-md shadow-md">
          <h2 className="text-xl text-white font-bold">{text}</h2>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
