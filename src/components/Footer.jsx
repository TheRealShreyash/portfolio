const Footer = ({ className }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`w-full mt-16 pt-6 border-t border-dashed border-[#262626] text-center md:text-left ${className || ""}`}
    >
      <p className="text-[#666] text-xs tracking-wide">
        © {year} · made with <span className="text-pink-400">❤</span> by
        Shreyash
      </p>
    </footer>
  );
};

export default Footer;
