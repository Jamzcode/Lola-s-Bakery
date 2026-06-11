import { FaInstagram, FaFacebook } from "react-icons/fa";
export default function SocialMedia() {
  return (
    <div className="flex justify-center gap-4 py-1">
      <a
        href="https://instagram.com/lolas_sourdough_bakery"
        target="_blank"
        rel="noreferrer"
        className="hover:text-rose-400 transition-colors duration-300"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://facebook.com/yourpage"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-500 transition-colors duration-300"
      >
        <FaFacebook size={24} />
      </a>
      {/* <a
        href="https://tiktok.com/@yourusername"
        target="_blank"
        rel="noreferrer"
        className="hover:text-black transition-colors duration-300"
      >
        <FaTiktok size={24} />
      </a> */}
    </div>
  );
}
