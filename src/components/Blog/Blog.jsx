import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
    details,
  } = blog;

  return (
    <div className="mb-15 px-2">
      <img
        className="md:w-[800px] rounded-md my-4"
        src={cover}
        alt={`cover picture of ${title}`}
      />
      <div className="flex justify-between my-4 pr-4">
        <div className="flex justify-center items-center gap-4">
          <img className="w-14 rounded-full" src={author_img} alt={author} />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p className="text-gray-600">{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="text-gray-600">{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 hover:text-red-500 cursor-pointer"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h1 className="text-4xl">{title}</h1>
      <p>
        {hashtags.map((hashtag, idx) => (
          <span key={idx}>
            <a href="">#{hashtag}</a>{" "}
          </span>
        ))}
      </p>
      <p className="mt-4">{details}</p>
      <button
        className="mt-4 cursor-pointer underline text-cyan-600 hover:text-cyan-900"
        onClick={() => handleMarkAsRead(id, reading_time)}
      >
        Mark as read
      </button>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
    </div>
  );
};

export default Blog;
