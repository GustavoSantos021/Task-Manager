import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(`/`)}
            className="absolute left-0 top-0 bottom-0 text-white"
          >
            <ArrowLeft />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Task Details
          </h1>
        </div>
        <div className="bg-slate-200 rounded-md shadow p-4 space-y-2">
          <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
          <p className="text-slate-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
