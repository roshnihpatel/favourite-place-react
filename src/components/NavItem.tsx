interface NavItemProps {
  label: string;
  link: string;
}
function NavItem(props: NavItemProps): JSX.Element {
  return (
    <>
      <a href={props.link}>{props.label}</a>
    </>
  );
}

export default NavItem;
