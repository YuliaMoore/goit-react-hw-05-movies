async function getMovieCredits(movieId) {
  const key = '159bbe351535e94b889f4936aec4db0e';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const filter = `?api_key=${key}&language=en-US`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default getMovieCredits;
