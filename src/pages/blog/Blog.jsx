import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="my-20 px-5 md:px-10 lg:px-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-20">
      {blogs?.map((blog) => (
        <div>
          <img src={blog.img} alt="" />
          <div className="flex items-center gap-2 my-4">
            <i className="fa-regular fa-user"></i>
            <p className="text-sm">By Admin</p>
          </div>
          <Link to={`/blog/${blog.id}`} state={{ blog: blog }}>
            <h3 className="text-xl text-primary font-semibold">{blog.title}</h3>
          </Link>
          <p className="text-sm text-slate-500">
            {blog.description.slice(0, 120)} ...
          </p>
          <Link
            state={{ blog: blog }}
            to={`/blog/${blog.id}`}
            className="bg-primary py-2 px-4 rounded inline-block text-white mt-4"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
