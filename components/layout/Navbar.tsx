const Navbar = () => {
  return (
    <nav className="flex justify-between py-8 px-[10%]">
      <div className="flex gap-x-6">
        <div>logo</div>
        <div>Vector</div>
        <div>Photos</div>
        <div>PSD</div>
        <div>Video</div>
        <div>More</div>
      </div>
      <div>
        <button className="px-4 py-2 rounded border">+ Submit</button>
      </div>
    </nav>
  );
};

export default Navbar;
