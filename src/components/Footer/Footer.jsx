import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full bg-slate-900 p-6 text-white flex items-center justify-center space-x-4">
      <a href="https://www.facebook.com/profile.php?id=100094953166899">
        <FaFacebook className="text-2xl hover:text-cyan-500" />
      </a>
      <a href="https://www.instagram.com/gonzalolima13/">
        <FaInstagram className="text-2xl hover:text-cyan-500" />
      </a>
      <a href="https://github.com/GonzaloLima13">
        <FaGithub className="text-2xl hover:text-cyan-500" />
      </a>
      <span>&copy;{new Date().getFullYear()} Gonzalo Lima</span>
    </div>
  );
};