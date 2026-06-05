import Image from "./Image";
import pic1 from "../assets/katie-gma.jpg";
import pic2 from "../assets/katie-lorie-2.jpg";

export default function About() {
  return (
    <>
      <div class="h-full">
        <div class=" flex items-center flex-col">
          <h1 class="text-center font-black text-4xl p-4 uppercase">
            Our Lola
          </h1>
          <div class="my-4">
            <Image src={pic1} />
            <div class="font-serif italic text-sm text-center pt-4">
              Grandma Dolores Ximenez
            </div>
          </div>
          <p class="px-4 text-center mt-2">
            Born from love and memories of those we've lost, but can see every
            dat, I've started my sourdough journey and have my first official
            bake sale, all things sourdough.
          </p>
          <div class="my-4">
            <Image src={pic2} />
            <div class="font-serif italic text-sm text-center pt-4">
              Lorie Ximenez-Gallegos
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
