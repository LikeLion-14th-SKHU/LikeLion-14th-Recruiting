import { useNavigate } from "react-router-dom";

export default function NextButton({ children, onClick, to }) {
  const navigate = useNavigate();

  return (
    <div className="w-45 mt-4.25 inline-block rounded-lg bg-gradient p-0.5">
      <button
        type="button"
        onClick={onClick ? onClick : () => navigate(to)}
        className="w-full rounded-lg bg-primary-bg py-2 text-xl font-semibold text-primary-point2 transition duration-600 hover:bg-gradient hover:text-primary-bg"
      >
        {children}
      </button>
    </div>
  );
}
