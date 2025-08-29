import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="md:w-2/3 ">
      <h1 className="text-4xl">সর্বমোট ব্লগ: {blogs.length} টি</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
