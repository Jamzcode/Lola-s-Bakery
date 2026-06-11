import PageTransition from "./PageTransition";
import bakeSale from "../assets/bake-sale2.jpg";
import Image from "../components/Image";
export default function Contact() {
  return (
    <PageTransition>
      <div class="h-screen">
        <h3 class="text-center font-black text-4xl p-4 uppercase">
          Thanks For Supporting Local
        </h3>
        <div class="text-center px-4">
          Interested in ordering some pastries for your party/event/wedding?
          Fill out our form below and a member of our bakery staff will reach
          out shortly.
        </div>
        <form
          name="client"
          method="POST"
          data-netlify="true"
          action="/success"
          class="p-4"
        >
          <input type="hidden" name="form-name" value="client" />
          <div class="flex flex-col gap-2 p-2 border-2 ">
            <label>Name(First and Last): </label>
            <input
              type="text"
              class="bg-amber-50 border border-amber-300 rounded px-2 py-1"
              name="name"
              border-2
              border-black
              required
            />
            <label>Email:</label>
            <input
              type="text"
              class="bg-amber-50 border border-amber-300 rounded px-2 py-1"
              name="email"
              required
            />
            <label>Phone:</label>
            <input
              type="tel"
              class="bg-amber-50 border border-amber-300 rounded px-2 py-1"
              name="phone"
              required
            />
            <label>Leave a message:</label>
            <textarea
              class="bg-amber-50 border border-amber-300 rounded px-2 py-1"
              name="message"
            />

            <div class="flex justify-center items-center pt-4">
              <button
                type="submit"
                class="bg-amber-700 h-10 w-40 hover:bg-amber-400 rounded-lg flex justify-center items-center shadow-md shadow-gray-400 mb-2 hover:transition duration-300 ease-in-out"
              >
                Send
              </button>
            </div>
          </div>
        </form>
        <div class="flex justify-center">
          <Image src={bakeSale} size="w-64 h-64" />
        </div>
      </div>
    </PageTransition>
  );
}
