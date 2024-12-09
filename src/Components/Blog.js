import { useEffect, useState } from "react";
import BlogImage from "../assets/Rectangle 1461 (1).png";
import BlogImage2 from "../assets/Rectangle 1461 (2).png";
import BlogImage3 from "../assets/Rectangle 1461 (3).png";
import user from "../assets/User.png";
import calender from "../assets/CalendarBlank.png";
import arrow from "../assets/CaretRight (2).png";
import ArrowRight from "../assets/ArrowRight.png";
import blogData from "../Data/blogData.json"; 

const images = {
  BlogImage,
  BlogImage2,
  BlogImage3
};

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-[6cqw] md:gap-[2cqw] pt-[8cqw] md:pt-[2cqw]">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-[4cqw] md:p-[1cqw]">
            <div className="aspect-[16/12] md:rounded-[0.8cqw] overflow-hidden">
              <img
                src={images[blog.image]}
                alt="blog-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-center pt-[2cqw] md:pt-[1cqw]">
              <div className="flex items-center gap-[2cqw] md:gap-[1cqw]">
                <img
                  className="w-[3.5cqw] md:w-[1cqw] aspect-square"
                  src={user}
                  alt="user"
                />
                <p className="text-14 font-inter text-darkBlue">{blog.author}</p>
              </div>

              <div className="flex items-center gap-[2cqw] md:gap-[1cqw]">
                <img
                  className="w-[3.5cqw] md:w-[1cqw] aspect-square"
                  src={calender}
                  alt="calendar"
                />
                <p className="text-14 font-inter text-darkBlue">{blog.date}</p>
              </div>
            </div>
            <h4 className="text-24 font-inter font-semibold text-darkBlue pt-[3cqw] md:pt-[1cqw]">
              {blog.title}
            </h4>
            <div className="flex justify-center items-center md:gap-[.6cqw] cursor-pointer text-16 text-lightBlue font-normal font-inter pt-[3cqw] md:pt-[1cqw]">
              <a href={blog.detailsLink}>View details</a>
              <div className="md:w-[1.2cqw]">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center w-auto pt-[8cqw] md:pt-[4cqw]">
        <div className="cursor-pointer w-auto flex justify-center items-center gap-[2cqw] md:gap-[1.2cqw] rounded-[1cqw] bg-lightBlue px-[8cqw] py-[2cqw] md:px-[5.5cqw] md:py-[1.6cqw] text-24 text-white font-normall">
          Read more
          <div className="md:w-[2cqw] aspect-square">
            <img
              src={ArrowRight}
              alt="ArrowRight"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
