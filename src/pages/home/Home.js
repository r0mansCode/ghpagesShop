import "./Home.css";
import composition2 from "../../assets/images/composition2.jpg";

export const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Lorem Ipsum</h1>
      <div className="homeSubcontainer">
        <div className="homeDescription">
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
          <br />
          <br />
          Information
          <ul className="informationList">
            <li>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit
            </li>
            <li>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem
            </li>
            <li>"Sed ut perspiciatis unde omnis iste natus error </li>
          </ul>
        </div>
        <img src={composition2} className="compositionPicture" />
      </div>
    </div>
  );
};
