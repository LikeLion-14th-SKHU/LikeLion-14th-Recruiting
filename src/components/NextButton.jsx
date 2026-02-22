import { useNavigate } from "react-router-dom";

export default function NextButton({ children, onClick, to }) {
  const navigate = useNavigate();

  return (
    <div className="w-26 h-auto md:w-52 mt-4.25 inline-block rounded-lg bg-gradient p-0.5">
      <button
        type="button"
        onClick={onClick ? onClick : () => navigate(to)}
        className="w-full rounded-lg text-[12px] bg-primary-bg py-2 md:text-[24px] font-semibold text-primary-point2 transition duration-600 hover:bg-gradient hover:text-primary-bg"
      >
        <div className="w-fit mx-auto bg-gradient bg-clip-text text-transparent">
          {children}
        </div>
      </button>
    </div>
  );
}
