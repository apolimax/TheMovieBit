export function getReleaseDateBR(movie) {
  let releaseDateBR = movie?.release_dates?.results?.filter(
    (item) => item.iso_3166_1 === "BR"
  )[0]?.release_dates[0].release_date;

  // if there isn't a release date for Brazil
  if (!releaseDateBR) {
    releaseDateBR =
      movie?.release_dates.results[0].release_dates[0].release_date;
  }

  return releaseDateBR;
}

export function getFormattedReleaseDate(movie) {
  const releaseDateBR = getReleaseDateBR(movie);

  return new Intl.DateTimeFormat("pt-BR").format(new Date(releaseDateBR));
}

export function getReleaseYear(movie) {
  const releaseDateBR = getReleaseDateBR(movie);

  return new Date(releaseDateBR).getFullYear();
}

export function getCertification(movie) {
  let certification = movie?.release_dates?.results?.filter(
    (item) => item.iso_3166_1 === "BR"
  )[0]?.release_dates[0].certification;

  // if there isn't a certification for Brazil
  if (!certification) {
    certification =
      movie?.release_dates?.results[0].release_dates[0].certification;
  }

  return certification;
}

export function getDuration(runtime) {
  const hour = `${runtime / 60}`[0];
  const minutes = runtime % 60;

  return `${hour}h ${minutes}m`;
}

export function getGenres(genres) {
  const generos = genres
    ?.map((genre, index) => {
      if (index === genres.length - 1) {
        // if is the last genre to show, there is no comma
        return `${genre.name}`;
      } else {
        return `${genre.name}, `;
      }
    })
    .join("");

  return generos;
}
