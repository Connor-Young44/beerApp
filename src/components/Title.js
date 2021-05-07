import "./Title.css";

export default function Title(props) {
  return (
    <div className="title-main">
      <h1 className="title-header">Welcome to the {props.title} page</h1>
    </div>
  );
}
