
import pic0 from "../assets/sourdough-bread.jpg";

import pic1 from "../assets/lemon-blueberry-focaccia.jpg";
import pic2 from "../assets/sourdough-cinnamon-roll.jpg";
import pic3 from "../assets/tomato&garlic-focaccia.jpg";
import pic4 from "../assets/italian-herb-sourdough.jpg";
import pic5 from "../assets/cranberry-orange-scones.jpg";
import PageTransition from "./PageTransition";

export default function Menu() {
  return (
    <PageTransition>
      <div class="min-h-screen">
        <h1 class="text-center font-black text-4xl p-4 uppercase">
          Current Offerings
        </h1>
        <div class="grid grid-cols gap-4 p-4">
          <div class="flex justify-center items-center">
            <img src={pic0} />
          </div>
          <div class="flex justify-center items-center">
            <img src={pic1} />
          </div>
          <div class="flex justify-center items-center">
            <img src={pic2} />
          </div>
          <div class="flex justify-center items-center">
            <img src={pic3} />
          </div>
          <div class="flex justify-center items-center">
            <img src={pic4} />
          </div>

          <div class="flex justify-center items-center">
            <img src={pic5} />
          </div>
        </div>
        <div>
          <p class="text-center w-full font-semibold px-4">
            And more! Contact us for a complete list.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
