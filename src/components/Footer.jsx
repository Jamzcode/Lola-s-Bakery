import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer class="flex flex-col justify-center border-t-4 border-double mt-4 font-[abril_fatface]">
      <SocialMedia />
      <div class="flex text-sm justify-center">
        <p>© 2026 Lola's Bakery</p>
      </div>
    </footer>
  );
}
