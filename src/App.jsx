import Blogs from "./components/Blogs";
import Header from "./components/Header";
function App() {
  return (
    <div className="container flex flex-col mx-auto my-2 p-5">
      <Header></Header>
      <div className="flex items-center ">
        <div className="flex flex-grow border border-t border-black"></div>
        <p className="p-4">Lorem, ipsum dolor.</p>
        <div className="flex flex-grow border border-t border-black"></div>
      </div>
      <Blogs />
    </div>
  );
}

export default App;
