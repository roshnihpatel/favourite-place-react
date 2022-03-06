import FavouritePlace from "./FavouritePlace";

function MainContent(): JSX.Element {
  return (
    <main>
      <FavouritePlace
        placeName={"Valle Rojo (Red Valley)"}
        location={{ country: "Peru", city: "Cusco" }}
        description={
          "The Red Valley's viewpoint sits at about 5,000m above sea level and is a 30-minute walk from the more well-known Rainbow Mountain (Vinicuna). But the valley's beautiful combination of deep and vibrant reds and contrasting patches of green create a unique and enchanting landscape that is definitely worth the trek."
        }
        imageURL={
          "https://unsplash.com/photos/MMwFFlofcnA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
        }
        imageDescription={"A valley with red peaks and greenery at the base"}
      />
      ;
    </main>
  );
}

export default MainContent;
