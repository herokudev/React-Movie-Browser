import Hero from './Hero';

const Home = () => {
  return (
    <>
      <Hero text="Type your favorite movie on the search box!!" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">No search results !!</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
