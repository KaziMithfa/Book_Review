import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, category, tags, rating } = book;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <Link to={`/book/${bookId}`}>
        <figure className="w-[336px] h-[230px] bg-[#F3F3F3]">
          <img
            className="w-[234px] h-[166px] object-contain "
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="flex justify-between ml-10">
          <p className="text-[#23BE0A]">{tags[0]}</p>
          <p className="mr-4 text-[#23BE0A]">{tags[1]}</p>
        </div>
        <div className="card-body pl-0">
          <p className="mr-8 flex justify-start text-[#131313] text-2xl font-bold">
            {bookName}
          </p>
          <p className="mr-18 flex justify-start   text-[#131313CC] text-[16px] font-medium">
            By: {author}
          </p>
          <div className="flex justify-between">
            <p className="flex justify-start">{category}</p>
            <div className="flex gap-x-1">
              <h1>{rating}</h1>
              <img src="images/star.jpg" alt="" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
