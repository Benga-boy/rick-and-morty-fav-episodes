import { IState, IAction, IEpisode } from "../interfaces";

const reducer = (state: IState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_DATA":
      return {
        ...state,
        episodes: payload.map((ep: IEpisode) => {
          return { ...ep, fav: "unliked" };
        }),
      };
    case "ADD_FAV":
      return {
        ...state,
        favourites: [...state.favourites, { ...payload, fav: "liked" }],
        episodes: state.episodes.map((ep: IEpisode) =>
          ep.id === payload.id ? { ...ep, fav: "liked" } : ep
        ),
      };
    case "DELETE_FAV":
      return {
        ...state,
        favourites: state.favourites.filter(
          (fav: IEpisode) => fav.id !== payload.id
        ),
        episodes: state.episodes.map((ep: IEpisode) =>
          ep.id === payload.id ? { ...ep, fav: "unliked" } : ep
        )
      };
    default:
      return state;
  }
};

export default reducer;
