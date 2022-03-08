import FavouritePlace from "./FavouritePlace";

function MainContent(): JSX.Element {
  return (
    <main>
      <FavouritePlace
        placeName={"Valle Rojo (Red Valley)"}
        sectionName={"ValleRojo"}
        location={{ country: "Peru", city: "Cusco" }}
        description={
          "The Red Valley's viewpoint sits at about 5,000m above sea level and is a 30-minute walk from the more well-known Rainbow Mountain (Vinicuna). But the valley's beautiful combination of deep and vibrant reds and contrasting patches of green create a unique and enchanting landscape that is definitely worth the trek."
        }
        imageURL={
          "https://images.unsplash.com/photo-1570994579984-1e99c2fe3288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        }
        imageDescription={"A valley with red peaks and greenery at the base"}
      />
      <FavouritePlace
        placeName={"Salar de Uyuni"}
        sectionName={"SalardeUyuni"}
        location={{ country: "Bolivia", city: "Uyuni" }}
        description={"###"}
        imageURL={
          "https://images.unsplash.com/photo-1526029655228-b7ee496c7819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
        imageDescription={"vast salt flats and mountain peaks near the horizon"}
      />
    </main>
  );
}

export default MainContent;
