import Image from "./Image";

import pic0 from "../assets/sourdough-menu.jpg";

import pic1 from "../assets/chocolate-cookies.jpg";
import pic2 from "../assets/donuts.jpg";
import pic3 from "../assets/foccacia.jpg";
import pic4 from "../assets/scones.jpg";
import pic5 from "../assets/packaging.jpg";

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
    </div>
  );
}
