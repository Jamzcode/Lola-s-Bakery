import Image from "./Image";
import pic1 from "../assets/katie-gma.jpg";
import pic2 from "../assets/katie-gma3.jpg";
import PageTransition from "./PageTransition";

export default function About() {
  return (
    <PageTransition>
      <div class="min-h-screen">
        <div class=" flex items-center flex-col">
          <h1 class="text-center font-black text-4xl p-4 uppercase font-[league_script]">
            Our Lola
          </h1>
          <p class="italic  text-center font-medium font-[league_script] px-6">
            "What began as learning how to make bread for my family grew into a
            passion for creating handcrafted baked goods and sharing them with
            my community."
          </p>

          <div class="my-4">
            <Image src={pic1} />
            <div class="font-serif italic text-sm text-center pt-4">
              Grandma Dolores Ximenez
            </div>
          </div>
          <p class="px-4 text-center ">
            Lola’s Sourdough Bakery is my way of honoring my grandmother’s
            legacy while creating homemade products that bring comfort and
            connection to others. My goal is to provide quality handcrafted
            baked goods that help people slow down, gather around the table, and
            make memories with the people they love. As the bakery has grown,
            we’ve expanded beyond sourdough breads and baked goods to include
            handcrafted seasonal drinks like fresh-squeezed lemonade, cold brew
            coffee, and other refreshing beverages. Living in Texas, I wanted to
            create menu items that pair perfectly with our baked goods while
            helping customers cool off and enjoy a little taste of home.
          </p>
          <div class="mt-2">
            <Image src={pic2} />
          </div>
          <p class="px-4 text-center mt-2">
            My biggest inspiration was my grandmother, Dolores, who we lovingly
            called “Lola.” Her love for family, food, and bringing people
            together inspired me to name the bakery after her and build
            something that reflects those same values.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
