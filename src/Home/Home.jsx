const Home = () => {
  return (
    <div className="mt-3">
      {/* Banner Secion */}

      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="images/cover.jpg" className="max-w-sm  " />
          <div className="flex items-center justify-center flex-col">
            <h1 className=" text-[#131313] w-[500px] text-xl  lg:text-5xl">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn  bg-[#23BE0A] mt-4">View the list</button>
          </div>
        </div>
      </div>

      {/* Book Section starts from here... */}

      <section className="mt-3">
        <h1 className="text-center mt-3 text-[#131313] text-4xl">Books</h1>
      </section>
    </div>
  );
};

export default Home;