module.exports = `
    type Episode {
      id: ID,
      anime_id: ID,
      anime: Anime,
      title: String,
      description: String,
      video: String,
      trailer_video: String,
      banner: String,
      icon: String,
      episode_number: Int,
      createdAt: String,
      updatedAt: String
}
`;
