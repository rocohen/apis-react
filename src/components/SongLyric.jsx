const SongLyric = ({ title, lyrics }) => {
  const capitalizeTitle = (title) => {
    let formattedTitle = title.toLowerCase();
    return formattedTitle.replace(/^\w/, (c) => c.toUpperCase());
  };

  return (
    <section>
      <h3>{capitalizeTitle(title)}</h3>
      <blockquote style={{ whiteSpace: 'pre-wrap' }}>{lyrics}</blockquote>
    </section>
  );
};

export default SongLyric;
