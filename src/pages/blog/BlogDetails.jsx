import React from "react";
import { useLocation } from "react-router-dom";

const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state.blog;
  
  return (
    <div className="md:flex px-5 md:px-10 lg:px-14 py-20 gap-20">
      <div className="w-4/6">
        <img className="w-full" src={blog.img} alt="" />
        <div className="flex items-center gap-2 my-4">
          <i className="fa-regular fa-user"></i>
          <p className="text-sm">By Admin</p>
        </div>
        <h3 className="text-2xl font-semiblod">{blog.title}</h3>
        <p className="text-sm text-slate-500 my-3 leading-6">
          {blog.description}
        </p>
      </div>
      <div className="w-2/6">
        <img src={blog.postImg1} alt="" />
        <img className="my-10" src={blog.postImg2} alt="" />
        <h3 className="text-xl font-semibold">{blog.subTitle}</h3>
        <p className="text-sm text-slate-500 leading-6 mt-3">
          {blog.subDescrip}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
