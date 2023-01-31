import Hero from './Hero';
import MovieCard from './MovieCard';

const Search = ({ searchText, searchResults }) => {
const searchTerm = `You are searching for ${ searchText }`;

const resultsHtml = searchResults.map((obj, i) => {
  return <MovieCard movie={obj} key={i} />
});

  return (
    <>
      <Hero text={searchTerm} />
      {resultsHtml &&
        <div className="container">
          <div className="row">
            {resultsHtml}
          </div>  
        </div>
      }      
    </>
  )
}
export default Search;