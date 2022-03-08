import NavItem from "./NavItem";

function PageHeader(): JSX.Element {
  return (
    <header>
      <h1>My Favourite Places</h1>
      <div id="navBar">
        <NavItem label={"ValleRojo (Red Valley)"} link={"#ValleRojo"} />
        <NavItem label={"Salar de Uyuni"} link={"#SalardeUyuni"} />
      </div>
    </header>
  );
}

export default PageHeader;
