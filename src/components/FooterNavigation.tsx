interface FooterNavProps {
  label: string;
  link: string;
}
function FooterNavigation(props: FooterNavProps): JSX.Element {
  return (
    <div>
      <a href={props.link}>{props.label}</a>
    </div>
  );
}

export default FooterNavigation;
