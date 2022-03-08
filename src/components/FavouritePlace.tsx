interface FavouritePlaceProps {
  placeName: string;
  sectionName: string;
  location: { country: string; city: string };
  description: string;
  imageURL: string;
  imageDescription: string;
}

function FavouritePlace(props: FavouritePlaceProps): JSX.Element {
  return (
    <section id={props.sectionName}>
      <h2>{props.placeName}</h2>
      <div id="cat">
        <img src={props.imageURL} alt={props.imageDescription} />
      </div>
      <p>
        {props.location.country}, {props.location.city}
      </p>
      <p>{props.description}</p>
    </section>
  );
}

export default FavouritePlace;
