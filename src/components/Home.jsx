import { useNavigate } from "react-router-dom";
import Image from "./Image";
import cinnamonRoll from "../assets/cinnamon-roll.jpg";
import breadLoaf from "../assets/bread-loaf.jpg";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div class="h-auto p-2">
      <div class="font-black uppercase flex justify-center items-center text-2xl text-center">
        <h1 class="text-center font-black text-4xl p-4 uppercase">
          Welcome to Lola's Sourdough Bakery
        </h1>
      </div>
      <div class="flex justify-center items-center px-4 mt-6">
        {" "}
        <Image  src={cinnamonRoll} />
      </div>
      <p class="text-md p-6 flex justify-center">
        At Lola’s Sourdough Bakery, we believe great food brings people
        together. Inspired by our grandmother Lola, we create handcrafted
        sourdough breads, pastries, cookies, and seasonal beverages made with
        care, quality ingredients, and a passion for tradition. From fresh-baked
        loaves to refreshing lemonades and specialty drinks, our mission is to
        serve products that create moments of comfort, connection, and community
        with every visit.
      </p>
      <div class="flex flex-col items-center ">
        <Image src={breadLoaf} />
        <p class="italic font-medium font-serif text-center px-6 py-2">
          Testimony 1: "These are the best desserts I have ever eaten in my life
          and I mean it!" --somebody
        </p>
      </div>
      <div class="flex justify-center items-center py-4">
        <div
          onClick={() => {
            navigate("/contact");
          }}
          class="bg-amber-700 h-10 w-40 flex justify-center items-center hover:bg-amber-400 rounded-lg mt-4 shadow-md shadow-gray-400"
        >
          Contact Us
        </div>
      </div>
    </div>
  );
}
