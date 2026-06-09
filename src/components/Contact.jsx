// import { useRef } from "react";

export default function Contact() {
  // const formRef = useRef(null);

  // function handleFormSubmit(e, formRef) {
  //   e.preventDefault();
  //   const data = new FormData(formRef.current);
  //   const name = data.get("name");
  //   const email = data.get("email");
  //   const phone = data.get("phone");
  //   const message = data.get("message");

  //   if (name === "" || email === "" || phone === "") {
  //     alert("Please provide a name, email, and phone number.");
  //   }

  //   console.log(
  //     `Name: ${name} | Email: ${email} | Phone: ${phone} | Message: ${message}`,
  //   );
  // }

  return (
    <div class="h-screen">
      <h3 class="text-center font-black text-4xl p-4 uppercase">
        Thanks For Supporting Local
      </h3>
      <div class="text-center px-4">
        Interested in ordering some pastries for your party/event/wedding? Drop
        your info down below and our bakers will get in contact.
      </div>
      <form name="client" method="POST" data-netlify="true" class="p-4">
        <input type="hidden" name="form-name" value="client" />
        <div class="flex flex-col gap-2 p-2 border">
          <label>Name(First and Last): </label>
          <input type="text" class="bg-white" name="name" required />
          <label>Email:</label>
          <input type="text" class="bg-white" name="email" required />
          <label>Phone:</label>
          <input type="tel" class="bg-white" name="phone" required />
          <label>Leave a message:</label>
          <textarea class="bg-white" name="message" />

          <div class="flex justify-center items-center pt-4">
            <button
              type="submit"
              class="bg-amber-700 h-10 w-40 hover:bg-amber-400 rounded-lg flex justify-center items-center shadow-md shadow-gray-400 mb-2"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
