import Image from "./Image";
import cinnamonRoll from "../assets/cinnamon-roll.jpg";
import breadLoaf from "../assets/bread-loaf.jpg";

export default function HomePage() {
  return (
    <div class="h-auto p-2">
      <div class="font-black uppercase flex justify-center items-center text-2xl text-center">
        <h1 class="text-center font-black text-4xl p-4 uppercase">
          Welcome to the World of Sourdough
        </h1>
      </div>
      <div class="flex justify-center items-center px-4 mt-6">
        {" "}
        <Image src={cinnamonRoll} />
      </div>
      <p class="text-md p-6 flex justify-center">
        Support your local bakery. Born from love and memories of those we've
        lost, but can see every dat, I've started my sourdough journey and have
        my first official bake sale, all things sourdough.
      </p>
      <div class="flex flex-col items-center ">
        <p class="italic font-medium font-serif text-center px-6 py-2">
          Testimony 1: "These are the best desserts I have ever eaten in my life
          and I mean it!" --somebody
        </p>
        <Image src={breadLoaf} />
      </div>
      <div class="flex justify-center items-center py-4">
        <div
          onClick={() => {
            alert("clicked!");
          }}
          class="bg-amber-700 h-10 w-40 flex justify-center items-center hover:bg-amber-400 rounded-lg mt-4 shadow-md shadow-gray-400"
        >
          Contact Us
        </div>
      </div>
    </div>
  );
}
