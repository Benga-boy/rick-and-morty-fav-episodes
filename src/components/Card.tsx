import PropTypes from "prop-types";



const Card = ({ep, toggleFav, removeFav}: any) => {
  return (
    <section id="episodes" key={ep.id}>
      <div className="card">
        <img src={ep.image.medium} alt={`Rick and Mort ${ep.name}`} />
        <h3>{ep.name}</h3>
        <div className="description">
          <p>
            <strong>Season:</strong> {ep.season} <strong>Episode:</strong>{" "}
            {ep.number}
          </p>
          <p>
            <strong>Summary:</strong>{" "}
            {ep.summary && ep.summary.replace(/(<([^>]+)>)/gi, "")}
          </p>
        </div>
        {ep.fav !== "liked" ? (
          <button onClick={() => toggleFav(ep)} className="btn">
            Add to favourites
          </button>
        ) : (
          <button className="del_btn" onClick={() => removeFav(ep)}>
            Remove
          </button>
        )}
      </div>
    </section>
  );
};

Card.propTypes = {
  toggleFav: PropTypes.func.isRequired,
  removeFav: PropTypes.func.isRequired,
  ep: PropTypes.object.isRequired
};

export default Card;
