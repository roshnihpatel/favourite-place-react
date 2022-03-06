interface FavouritePlaceProps {
  placeName: string;
  location: { country: string; city: string };
  description: string;
  imageURL: string;
  imageDescription: string;
}

function FavouritePlace(props: FavouritePlaceProps): JSX.Element {
  return (
    <section>
      <h2>{props.placeName}</h2>

      <img ref={props.imageURL} alt={props.imageDescription} />
      <p>
        {props.location.country},{props.location.city}
      </p>
      <p>{props.description}</p>
    </section>
  );
}

export default FavouritePlace;
