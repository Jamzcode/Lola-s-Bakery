import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div class="h-screen flex flex-col justify-center items-center gap-4">
      <h2 class="text-3xl font-black uppercase">Message Sent!</h2>
      <p class="text-gray-500">Redirecting you home in a few seconds...</p>
    </div>
  );
}
