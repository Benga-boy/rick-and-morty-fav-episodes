import { Fragment, useEffect, useContext } from "react";
import axios from "axios";
import { addFavorites, getData, deleteFav } from "../state/action";
import { Context } from "../Store";
import { IEpisode } from "../interfaces";
import Card from "./Card";
import { Link } from "react-router-dom";

const Landing = () => {
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

  console.log("Favorites: ", state.favourites);

  return (
    <Fragment>
      <h1>Rick and Morty</h1>
      <h4>Pick your favourite episode</h4>
      <h4>
        <Link
          className="fav_link"
          to="/favs"
        >{`Favourites: ${state.favourites.length}`}</Link>
      </h4>
      {state.episodes.length > 0 && (
        <main className="main">
          {state.episodes.length > 0 &&
            state.episodes.map((ep: IEpisode) => {
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
      )}
    </Fragment>
  );
};

export default Landing;
