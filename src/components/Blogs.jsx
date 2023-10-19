import { useState } from "react";
import Blog from "./Blog";

function Blogs() {
  const blogsArray = [
    {
      title: "this is my text ",
      link: "hhtp.arsan.ir",
      decription: "have nice day",
    },
    {
      title: "this is my text ",
      link: "hhtp.arsan.ir",
      decription: "have nice day",
    },
    {
      title: "this is my text ",
      link: "hhtp.arsan.ir",
      decription: "have nice day",
    },
    {
      title: "this is my text ",
      link: "hhtp.arsan.ir",
      decription: "have nice day",
    },
    {
      title: "this is my text ",
      link: "hhtp.arsan.ir",
      decription: "have nice day",
    },
    {
      title: "this is my text ",
      link: "hhtp.arsan.ir",
      decription: "have nice day",
    },
    {
      title: "this is my text ",
      link: "hhtp.arsan.ir",
      decription: "have nice day",
    },
    {
      title: "this is my text ",
      link: "hhtp.arsan.ir",
      decription: "have nice day",
    },
  ];
  const [blogs, setBlogs] = useState(blogsArray);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 ">
      {blogs.map((blog, index) => {
        return (
          <Blog
            key={index}
            title={blog.title}
            link={blog.link}
            decription={blog.decription}
          />
        );
      })}
    </div>
  );
}
export default Blogs;
