export default function Image({ src, alt, caption, size = "w-96 h-96" }) {
  return (
    <div class="bg-white p-3 pb-10 shadow-lg rotate-1 hover:-rotate-1 transition-transform duration-300 w-fit">
      <img src={src} alt={alt} class={`${size} object-cover`} />
      <p class="text-center mt-3 font-handwriting text-gray-600 text-sm">
        {caption}
      </p>
    </div>
  );
}