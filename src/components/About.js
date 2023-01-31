import Hero from './Hero';

const About = () => {
  return (
    <>
      <Hero text="Type your favorite movie on the search box!!" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              This movie browser query data from https://api.themoviedb.org
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
