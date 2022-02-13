module.exports = (data) => {
  return {
    mal_id: data.mal_id,
    url: data.url,
    images: data.images,
    trailer: data.trailer,
    title: data.title,
    title_english: data.title_english,
    title_japanese: data.title_japanese,
    title_synonyms: data.title_synonyms,
    type: data.type,
    source: data.source,
    episodes: data.episodes,
    status: data.status,
    airing: data.airing,
    aired: data.aired,
    duration: data.duration,
    rating: data.rating ? data.rating : null,
    score: data.score ? data.score : null,
    scored_by: data.scored_by ? data.scored_by : null,
    rank: data.rank ? data.rank : null,
    popularity: data.popularity ? data.popularity : 0,
    members: data.members ? data.members : 0,
    favorites: data.favorites ? data.favorites : 0,
    synopsis: data.synopsis ? data.synopsis : "",
    background: data.background ? data.background : "",
    premiered: data.premiered ? data.premiered : "",
    broadcast: data.broadcast ? data.broadcast : {},
    related: data.related
      ? Object.values(data.related).map((item) => item.mal_id)
      : [],
    producers: data.producers
      ? Object.values(data.producers).map((producer) => producer.mal_id)
      : [],
    licensors: data.licensors
      ? Object.values(data.licensors).map((licensor) => licensor.mal_id)
      : [],
    studios: data.studios
      ? Object.values(data.studios).map((studio) => studio.mal_id)
      : [],
    genres: data.genres
      ? Object.values(data.genres).map((genre) => genre.mal_id)
      : [],
  };
};
