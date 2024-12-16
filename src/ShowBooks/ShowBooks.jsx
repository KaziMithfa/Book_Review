const ShowBooks = ({ bookList }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    tags,
    rating,
    yearOfPublishing,
    publisher,
    totalPages,
  } = bookList;

  return (
    <div className="flex flex-row gap-x-2">
      <div className="w-[230px] h-[229px] bg-[#1313130D] flex items-center justify-center rounded-2xl w-[40%]  ">
        <img
          src={image}
          className="w-[130px] h-[170px] rounded-lg shadow-2xl"
        />
      </div>

      <div className="w-[60%] pl-1">
        <h1 className="text-xl text-[#131313] font-bold flex items-start">
          {bookName}
        </h1>
        <p className="mt-3 flex items-start">Author: {author}</p>
        <div className="flex gap-x-3 mt-2 ">
          <p className="text-[#131313] text-[16px] font-bold">Tag</p>
          <p className="text-[#23BE0A]">{tags[0]}</p>
          <p className="mr-4 text-[#23BE0A]">{tags[1]}</p>
          <div className="flex gap-0">
            <img src="../../public/images/year.jpg" alt="" />
            <p>year of publishing: {yearOfPublishing}</p>
          </div>
        </div>

        <div className="flex mt-2 gap-x-1">
          <img src="../../public/images/people.jpg" alt="" />
          <p>Publisher: {publisher}</p>
          <img src="../../public/images/page.jpg" alt="" />
          <p>Page: {totalPages}</p>
        </div>
        <div className="mt-4 flex gap-x-3">
          <p className="text-[#328EFF]">Category: {category}</p>
          <p className="text-[#FFAC33]">Rating: {rating}</p>
          <button className="rounded-3xl bg-[#23BE0A] text-white p-1">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowBooks;
