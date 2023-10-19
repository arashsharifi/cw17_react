function Blog({ title, link, decription, handelDelete, id }) {
  return (
    <div className="flex flex-col bg-gray-200 gap-2 items-start p-5">
      <p className="text-blue-800">{title}</p>
      <p className="text-gray-400">{link}</p>
      <p className="text-black">{decription}</p>
      <button onClick={() => handelDelete(id)} className="bg-red-700 p-2">
        X
      </button>
    </div>
  );
}
export default Blog;
