function Header() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className=" flex flex-col gap-2 items-center justify-center bg-blue-600 p-5 text-white">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae
          eaque rerum voluptates, dignissimos, quia iure quibusdam perferendis,
          aspernatur alias consequuntur aperiam sunt consectetur harum quaerat
          necessitatibus recusandae in nihil?
        </p>

        <button className="bg-blue-950 px-4 py-2">
          Lorem ipsum dolor sit.
        </button>
      </div>
      <div className="flex bg-gray-200 flex-col gap-2 p-5 ">
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button className="bg-blue-800 text-white  py-2 text-sm mt-6">
          Lorem ipsum dolor sit.
        </button>
        <p className="text-blue-800 text-center">Lorem, ipsum dolor sit.</p>
      </div>
    </div>
  );
}
export default Header;
