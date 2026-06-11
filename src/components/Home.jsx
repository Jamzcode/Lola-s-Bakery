import { useNavigate } from "react-router-dom";
import PageTransition from "./PageTransition";
import Image from "./Image";
import cinnamonRoll from "../assets/cinnamon-roll.jpg";
import breadLoaf from "../assets/bread-loaf.jpg";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div class="h-auto p-2">
        <div class="font-black uppercase flex justify-center items-center text-2xl text-center">
          <h1 class="text-center font-black text-3xl px-4 uppercase font-[abril_fatface]">
            Welcome to Lola's
          </h1>
        </div>
        <div class="flex justify-center items-center px-4 mt-4">
          {" "}
          <Image src={cinnamonRoll} />
        </div>
        <p class="text-md p-6 flex justify-center">
          At Lola’s Sourdough Bakery, we believe great food brings people
          together. Inspired by our grandmother Lola, we create handcrafted
          sourdough breads, pastries, cookies, and seasonal beverages made with
          care, quality ingredients, and a passion for tradition. From
          fresh-baked loaves to refreshing lemonades and specialty drinks, our
          mission is to serve products that create moments of comfort,
          connection, and community with every visit.
        </p>
        <div class="flex flex-col items-center ">
          <Image src={breadLoaf} />
          <p class="italic font-medium  px-4 mt-4">
            "Lola's cinnamon rolls were the best cinnamon rolls I have ever
            tasted. They taste just like my Lola use to make!" --JX
          </p>
        </div>
        <div class="flex justify-center items-center py-4">
          <div
            onClick={() => {
              navigate("/contact");
            }}
            class="bg-amber-700 h-10 w-40 flex justify-center items-center hover:bg-amber-400 rounded-lg mt-4 shadow-md shadow-gray-400 transition duration-300 ease-in-out "
          >
            Contact Us
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
