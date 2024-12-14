import { useLoaderData, useParams } from "react-router-dom";

const BookCard = () => {
  const bookCards = useLoaderData();
  const { id } = useParams();
  //useParams by default take parameters as string for this reason we need to convert it to int
  const idInt = parseInt(id);

  const book = bookCards.find((bookCard) => bookCard.bookId === idInt);
  const {
    bookName,
    author,
    image,
    review,
    category,
    tags,
    totalPages,
    rating,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className=" hero min-h-[calc(100vh-80px)] mt-1">
      <div className="hero-content flex-col lg:flex-row gap-x-8  ">
        <div className="bg-[#1313130D] text-center   ">
          <img
            src={image}
            className=" max-w-sm  rounded-lg shadow-2xl  object-contain "
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="py-4 flex justify-start text-[#RRGGBBAA] text-xl font-medium">
            By: {author}
          </p>

          <p className="py-3 flex justify-start text-[#RRGGBBAA] text-xl font-medium">
            {category}
          </p>

          <hr className="mt-1" />

          <p className="py-3 flex justify-start text-[#131313B3] text-[16px] font-medium">
            <span className="text-[#131313] font-bold">Review:</span> {review}
          </p>

          <p className="py-3 flex justify-start gap-x-7 text-[#131313B3] text-[16px] font-medium">
            Tag <span className="text-[#23BE0A]">{tags[0]}</span>{" "}
            <span className="text-[#23BE0A]">{tags[1]}</span>
          </p>

          <hr className="mt-1" />

          <div className="flex gap-x-12 mt-1  mt-3 ">
            <div className="pt-5">
              <p className="flex justify-start text-[12px]">
                Number of Pages:{" "}
              </p>
              <p className="flex justify-start text-[12px]">Publisher: </p>
              <p className="flex justify-start text-[12px]">
                Year of Publishing:{" "}
              </p>

              <p className="flex justify-start text-[12px]">Rating:</p>
            </div>

            <div className="pt-5">
              <p className="flex justify-start items-start text-[#131313] font-bold text-[12px]">
                {totalPages}
              </p>
              <p className="flex justify-start items-start text-[#131313] font-bold text-[12px]">
                {publisher}
              </p>
              <p className="flex justify-start items-start text-[#131313] font-bold text-[12px]">
                {yearOfPublishing}
              </p>

              <p className="flex justify-start items-start text-[#131313] font-bold text-[12px]">
                {rating}
              </p>
            </div>
          </div>

          <div className="flex gap-x-10 mt-4 ">
            <button className="flex items-center justify-center btn text-[#131313]">
              Read{" "}
            </button>
            <button className="flex items-center justify-center btn text-white bg-[#50B1C9]">
              WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
