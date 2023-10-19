import { useState } from "react";
import Blog from "./Blog";

const blogsArray = [
  {
    title: "this is my text1 ",
    link: "hhtp.arsan.ir",
    decription: "have nice day",
    id: 1,
  },
  {
    title: "this is my text2 ",
    link: "hhtp.arsan.ir",
    decription: "have nice day",
    id: 2,
  },
  {
    title: "this is my text3 ",
    link: "hhtp.arsan.ir",
    decription: "have nice day",
    id: 3,
  },
  {
    title: "this is my text4 ",
    link: "hhtp.arsan.ir",
    decription: "have nice day",
    id: 4,
  },
  {
    title: "this is my text5 ",
    link: "hhtp.arsan.ir",
    decription: "have nice day",
    id: 5,
  },
  {
    title: "this is my text6 ",
    link: "hhtp.arsan.ir",
    decription: "have nice day",
    id: 6,
  },
  {
    title: "this is my text7 ",
    link: "hhtp.arsan.ir",
    decription: "have nice day",
    id: 7,
  },
  {
    title: "this is my text8 ",
    link: "hhtp.arsan.ir",
    decription: "have nice day",
    id: 8,
  },
];

function Blogs() {
  const [blogs, setBlogs] = useState(blogsArray);
  function handelDelete(id) {
    setBlogs((prevState) => {
      return prevState.filter((blog) => blog.id !== id);
    });
  }
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 ">
      {blogs.map((blog) => {
        return (
          <Blog
            key={blog.id}
            title={blog.title}
            link={blog.link}
            decription={blog.decription}
            handelDelete={handelDelete}
            id={blog.id}
          />
        );
      })}
    </div>
  );
}
export default Blogs;
