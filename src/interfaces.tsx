

export interface IState {
  episodes: Array<any>
  favourites: Array<any>
}

export interface IAction {
  type: string,
  payload: any
}


export interface IEpisode {
  id: number;
  name: string;
  number: number;
  runtime: number;
  airdate: string;
  airstamp: string;
  airtime: string;
  image: { medium: string; original: string };
  season: number;
  summary: string;
  type: string;
  url: string;
  fav: string
}