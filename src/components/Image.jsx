export default function Image({ src, alt, caption }) {
  return (
    <div className="bg-white p-3 pb-10 shadow-lg rotate-1 hover:-rotate-1 transition-transform duration-300">
      <img src={src} alt={alt} className="w-96 h-96 object-cover" />
      <p className="text-center mt-3 font-handwriting text-gray-600 text-sm">
        {caption}
      </p>
    </div>

    // <img
    //   class=" shadow-gray-500 rounded-lg shadow-md border w-96 h-80 hover:scale-105 transition-transform duration-300"
    //   src={src}
    // />
  );
}
