import { useContext, useEffect, Fragment } from "react";
import axios from "axios";
import { Context } from "../Store";
import { getData, addFavorites, deleteFav } from "../state/action";
import { Link } from "react-router-dom";
import { IEpisode } from "../interfaces";
import Card from "./Card";

const Favourites = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    state.episodes.length === 0 && fetchData();
  });

  const fetchData = async () => {
    const res = await axios.get(
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
    );
    return dispatch(getData(res.data._embedded.episodes));
  };

  const toggleFav = (card: IEpisode) => {
    console.log(card.fav);
    dispatch(addFavorites(card));
  };

  const removeFav = (card: IEpisode) => {
    dispatch(deleteFav(card));
  };

  return (
    <Fragment>
      <h1>Rick and Morty</h1>
      <h4>{`You have ${state.favourites.length} favourite episodes`}</h4>
      {state.favourites.length > 0 ? (
        <main className="main">
          {state.favourites.length > 0 &&
            state.favourites.map((ep: IEpisode) => {
              return (
                <Card
                  key={ep.id}
                  ep={ep}
                  toggleFav={toggleFav}
                  removeFav={removeFav}
                />
              );
            })}
        </main>
      ) : (
        <h4>
          <Link
            className="fav_link"
            to="/"
          >{`No Favourites in your list. Start Adding Favourites ${state.favourites.length}`}</Link>
        </h4>
      )}
    </Fragment>
  );
};

export default Favourites;
