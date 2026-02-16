import { useNavigate } from "react-router-dom";

export default function ApplyButton() {
  const navigate = useNavigate();

  return (
    <div className="w-52 mt-4.25 inline-block rounded-lg bg-gradient p-0.5">
      <button
        type="button"
        onClick={() => navigate("/apply")}
        className="w-full rounded-lg bg-primary-bg px-7 py-3 text-2xl font-semibold text-primary-point2 transition duration-600 hover:bg-gradient hover:text-primary-bg"
      >
        지원하러 가기
      </button>
    </div>
  );
}
