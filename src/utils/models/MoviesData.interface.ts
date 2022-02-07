type Ratings = {
  Source: string,
  Value: string,
}

export interface MovieData {
  id: string,
  title: string,
  year: string,
  rated: string,
  released: string,
  runtime: string,
  genre: string,
  director: string,
  writer: string,
  actors: string,
  plot: string,
  language: string,
  country: string,
  awards: string,
  poster: string,
  ratings: Ratings[],
  metascore: string,
  imdbrating: string,
  imdbvotes: string,
  imdbid: string,
  type: string,
  response: string,
  episode?: string,
  seriesid?: string,
  season?: string,
  totalseasons?: string,
}