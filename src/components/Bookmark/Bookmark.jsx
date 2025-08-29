const Bookmark = ({ bookmark }) => {
  //   console.log(bookmark);
  const { title } = bookmark;
  return (
    <div className="bg-gray-50 rounded-xl p-4 m-4">
      <h3 className="text-xl">👉 {title}</h3>
    </div>
  );
};

export default Bookmark;
