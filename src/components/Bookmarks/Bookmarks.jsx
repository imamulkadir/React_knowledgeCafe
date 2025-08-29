import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 space-y-8 sticky top-4 self-start">
      <div className="bg-purple-200 p-4 rounded-md">
        <h3 className="text-3xl text-center ">{readingTime} min Read</h3>
      </div>
      <div className=" bg-gray-300 rounded-md">
        <h2 className="text-3xl text-center pt-4">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        <div className="py-3 ">
          {bookmarks.map((bookmark, idx) => (
            <Bookmark key={idx} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
