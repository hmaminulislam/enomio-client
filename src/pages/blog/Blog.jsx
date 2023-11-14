import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Blog.css'

const Blog = () => {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="my-20 px-5 md:px-10 lg:px-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-20 max-w-[1400px] mx-auto">
      {blogs?.map((blog) => (
        <div className="blog-card flex flex-col justify-between">
          <img src={blog.img} alt="" />
          <div className="px-4">
          <div className="flex items-center gap-2 my-4">
            <i className="fa-regular fa-user"></i>
            <p className="text-sm">By Admin</p>
          </div>
          <Link to={`/blog/${blog.id}`} state={{ blog: blog }}>
            <h3 className="text-xl text-primary font-[500] mb-2">{blog.title}</h3>
          </Link>
          <p className="text-sm text-slate-500">
            {blog.description.slice(0, 120)} ...
          </p>
          <Link
            state={{ blog: blog }}
            to={`/blog/${blog.id}`}
            className="border-primary border-[1px] py-2 px-4 rounded-full inline-block text-primary mt-4 hover:bg-primary hover:text-white transition duration-500"
          >
            View Details
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
