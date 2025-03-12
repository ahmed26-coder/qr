import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function TargetPage() {
    return (
      <div className="flex flex-col gap-5 items-center justify-center min-h-screen p-4">
        <button className=" flex items-center gap-2 text-2xl border-2 rounded-lg py-2 px-5 hover:text-white hover:bg-green-600"><a className=" flex items-center gap-2" href="https://wa.me/201016626452"  target='_blank'><FaWhatsapp />Whats App</a></button>
        <button className=" flex items-center gap-2 text-2xl border-2 rounded-lg py-2 px-5 hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:text-white"><a className=" flex items-center gap-2" href="https://www.instagram.com/ahmad_.shrara/profilecard/?igsh=Ym55YXl2eWN6em1x" target='_blank'><FaInstagram />Instagram</a></button>
        <button className=" flex items-center gap-2 text-2xl border-2 rounded-lg py-2 px-5 hover:text-white hover:bg-blue-600"><a className=" flex items-center gap-2" href="https://www.facebook.com/profile.php?id=100089991578793&mibextid=ZbWKwL" target='_blank'><FaFacebookF />FaceBook</a></button>
        <button className=" flex items-center gap-2 text-2xl border-2 rounded-lg py-2 px-5 hover:text-white hover:bg-blue-500/90"><a className=" flex items-center gap-2" href="https://www.linkedin.com/in/ahmed-adham-479334331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedinIn />Linked In</a></button>
        <button className=" flex items-center gap-2 text-2xl border-2 rounded-lg py-2 px-5 hover:text-white hover:bg-gray-600"><a className=" flex items-center gap-2" href="https://github.com/ahmed26-coder" target='_blank'><FiGithub />Git Hub</a></button>
        <button className=" flex items-center gap-2 text-2xl border-2 rounded-lg py-2 px-5 hover:text-white hover:bg-blue-500/95"><a className=" flex items-center gap-2" href="https://t.me/+201016626452" target='_blank'><FaTelegramPlane />Telegram</a></button>
        <button className=" flex items-center gap-2 text-2xl border-2 rounded-lg py-2 px-5 hover:text-white hover:bg-gradient-to-br from-blue-500 via-green-500 via-yellow-500 to-red-500"><a className=" flex items-center gap-2" href="https://google.ahmadadham330@gmail.com" target='_blank'><FaGoogle />Google</a></button>
      </div>
    );
  }
  