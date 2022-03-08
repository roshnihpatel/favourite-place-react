interface NavItemProps {
  label: string;
  link: string;
}
function NavItem(props: NavItemProps): JSX.Element {
  return (
    <div id="navItem">
      <a href={props.link}>{props.label}</a>
    </div>
  );
}

export default NavItem;
