

export const getData = (data: object[]) => {
  return {
    type: 'FETCH_DATA',
    payload: data
  }
}

export const addFavorites = (card: object) => {
  return {
    type: 'ADD_FAV',
    payload: card
  }
}

export const deleteFav = (card: object) => {
  return {
    type: 'DELETE_FAV',
    payload: card
  }
}