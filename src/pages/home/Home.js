import "./Home.css";
import mockLogo from "../../assets/images/cupPicture.png";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiOrange, GiPresent } from "react-icons/gi";

export const Home = () => {
  // const src = "https://www.youtube.com/embed/kmxM_JNLmMI";
  // const src = "https://www.youtube.com/embed/d15DP5zqnYE";

  // const Video = () => {
  //   return (
  //     <iframe
  //       width="560"
  //       height="315"
  //       src={src}
  //       title="Youtube Player"
  //       frameborder="0"
  //       allowFullScreen
  //     />
  //   );
  // };
  return (
    <div className="homeContainer">
      <div className="homeTitle">Īsumā Par Mums</div>
      <div className="homeSubcontainer">
        <img src={mockLogo} className="mockLogo" />
        <div className="homeDescription">
          <strong>"Munchies & Drinks"</strong> is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
          <br />
          <br />
          {/* <iframe
            width="560"
            height="315"
            src={src}
            title="Youtube Player"
            frameborder="0"
            allowFullScreen
          /> */}
        </div>
      </div>
      <section className="bulletpointSection">
        <div></div>
        <div className="bulletpointRow">
          <CiDeliveryTruck className="animatedBulletPoints" /> Bezmaksas piegāde
          Rīgā pasūtījumiem virs €40
        </div>
        <div className="bulletpointRow">
          <GiOrange
            style={{ fontSize: "18px" }}
            className="animatedBulletPoints"
          />{" "}
          Rūpīgi pagatavotie un pārbaudītie produkti
        </div>
        <div className="bulletpointRow">
          <GiPresent className="animatedBulletPoints" /> Ja vēlies individuāli
          sagatavoto pasūtījumu, sazinies ar mums
        </div>
      </section>
    </div>
  );
};
