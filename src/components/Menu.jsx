import Image from "./Image";

import pic0 from "../assets/sourdough-bread.jpg";

import pic1 from "../assets/lemon-blueberry-focaccia.jpg";
import pic2 from "../assets/sourdough-cinnamon-roll.jpg";
import pic3 from "../assets/tomato&garlic-focaccia.jpg";
import pic4 from "../assets/italian-herb-sourdough.jpg";
import pic5 from "../assets/cranberry-orange-scones.jpg";

export default function Menu() {
  return (
    <div class="h-auto">
      <h1 class="text-center font-black text-4xl p-4 uppercase">
        Current Offerings
      </h1>
      <div class="grid grid-cols-2 gap-4 p-4">
        <div class="flex justify-center items-center">
          <Image src={pic0} />
        </div>
        <div class="flex justify-center items-center">
          <Image src={pic1} />
        </div>
        <div class="flex justify-center items-center">
          <Image src={pic2} />
        </div>
        <div class="flex justify-center items-center">
          <Image src={pic3} />
        </div>
        <div class="flex justify-center items-center">
          <Image src={pic4} />
        </div>

        <div class="flex justify-center items-center">
          <Image src={pic5} />
        </div>
      </div>
      <div>
        <p class="text-center w-full">
          And more! Inquire for more recipes and projects.
        </p>
      </div>
    </div>
  );
}
