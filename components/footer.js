import { ImTwitter, ImInstagram, ImWhatsapp } from "react-icons/im";
import Link from "next/link";
import Newsletter from "../components/_child/newsletter";
const footer = () => {
  const bg = {
    backgroundImage: "url('/images/footer1.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <ImInstagram color="#888888" />
            </Link>
            <Link href={"/"}>
              <ImTwitter color="#888888" />
            </Link>
            <Link href={"/"}>
              <ImWhatsapp color="#888888" />
            </Link>
          </div>

          <p className="py-5 text-gray-400 sm:text-black">
            Copyright &copy; 2023 All rights reserved | Made by SandieCodes
          </p>
          <p className="text-gray-400  sm:text-black text-center">
            Terms & Conditions{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
