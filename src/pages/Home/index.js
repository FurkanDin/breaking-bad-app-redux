import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import "./styles.css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
function Home() {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const nextPage = useSelector((state) => state.characters.page);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);
  console.log(characters);

  if (status === "failed") {
    return <Error message={error} />;
  }
  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <Link to={`/char/${character.char_id}`}>
              <img
                alt={character.name}
                src={character.img}
                className="character"
              />
              <div className="char_name">{character.name}</div>
            </Link>
          </div>
        ))}
      </Masonry>
      {status === "loading" && <Loading />}
      {hasNextPage && status !== "loading" && (
        <button onClick={() => dispatch(fetchCharacters(nextPage))}>
          Load More ({nextPage})
        </button>
      )}
      {!hasNextPage && <div>There is nothing to be show</div>}
    </div>
  );
}

export default Home;
