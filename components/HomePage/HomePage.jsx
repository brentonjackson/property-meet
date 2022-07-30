function HomePage(props) {
  return (
    <div>
      Hi, i am in home!
      {props ? props.children : ""}
    </div>
  );
}
