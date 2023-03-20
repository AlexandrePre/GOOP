/* eslint-disable import/no-unresolved */
import { useRef, useState } from "react";
import NavBar from "@components/NavBar/NavBar";
import arrow from "@assets/img/arrow.png";
import buildings from "@assets/img/buildings.png";
import bushes from "@assets/img/bushes.png";
import logo from "@assets/img/logo.png";
import roadcutPart01 from "@assets/img/roadcutPart01.png";
import roadcutPart02 from "@assets/img/roadcutPart02.png";
import socle from "@assets/img/socle.png";
import degrade from "@assets/img/degrade.png";
import yellowBar from "@assets/img/YellowBar.png";
import birds from "@assets/img/birds.png";
import trees from "@assets/img/trees.png";
import roadPage02 from "@assets/img/roadPage02.png";
import montains from "@assets/img/montains.png";
import { gsap } from "gsap";
import "../Tailwind.css";
import ContainerSearchBar from "./searchBar/ContainerSearchBar";
import CarContainer from "./Car/CarContainer";

function Home() {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(1);

  function next() {
    gsap.to("#car", { opacity: 1, duration: 0.8, delay: 0, x: "80vw" });

    setTimeout(() => {
      gsap.fromTo(
        "#car",
        { opacity: 1, duration: 0.5, delay: 0, x: "-50vw" },
        { opacity: 1, duration: 0.5, delay: 0, x: "0vw" }
      );
      setIsActive((i) => {
        if (i >= 13) return isActive;
        return i + 1;
      });
    }, 700);
  }
  function back() {
    gsap.to("#car", { opacity: 1, duration: 0.8, delay: 0, x: "-80vw" });

    setTimeout(() => {
      gsap.fromTo(
        "#car",
        { opacity: 1, duration: 0.5, delay: 0, x: "50vw" },
        { opacity: 1, duration: 0.5, delay: 0, x: "0vw" }
      );
      setIsActive((i) => {
        if (i <= 1) return isActive;
        return i - 1;
      });
    }, 700);
  }
  const handleClick = () => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 2050);
    const TL = gsap.timeline();
    TL.to("#car", {
      y: "-1.2vw",
      duration: 1,
      delay: 0,
    })
      .to("#socle", {
        y: "-1.2vw",
        duration: 1,
        delay: -1,
      })
      .to("#car", {
        y: "49.25vw",
        duration: 4,
        delay: 0.5,
      })
      .to("#socle", {
        y: "49.25vw",
        duration: 4,
        delay: -4,
      });
    gsap.to("#logo", {
      x: "80vw",
      duration: 5,
      delay: 1.5,
    });
    gsap.to("#buildings", {
      y: "5vw",
      duration: 2,
      delay: 1.5,
    });
    gsap.to("#bushes", {
      x: "-30vw",
      duration: 2,
      delay: 1.5,
    });
    gsap.to("#montains", {
      y: "-5vw",
      duration: 5,
      delay: 1.5,
    });
    gsap.to("#trees", {
      y: "-3vw",
      x: "5vw",
      duration: 5,
      delay: 1.5,
    });
    gsap.to("#birds", {
      y: "-10vw",
      duration: 8,
      delay: 1.5,
    });
    gsap.from("#logoP02", {
      x: "20vw",
      duration: 2,
      delay: 6,
    });
  };
  return (
    <div className="fullPages">
      <section className="homePage">
        <ContainerSearchBar />
        <NavBar />
        <img src={logo} alt="logo" id="logo" />
        <img src={buildings} alt="buildings" id="buildings" />
        <img src={degrade} alt="degrade" id="degrade" />
        <img src={bushes} alt="bushes" id="bushes" />
        <img src={roadcutPart01} alt="roadcutPart01" id="roadcutPart01" />
        <img src={socle} alt="socle" id="socle" />
        <CarContainer isActive={isActive} setIsActive={setIsActive} />
        <img src={roadcutPart02} alt="roadcutPart02" id="roadcutPart02" />
        <img src={yellowBar} alt="yellowBar" id="yellowBar" />
        <img
          onKeyDown=""
          role="presentation"
          src={arrow}
          alt="arrow"
          id="arrowRight"
          onClick={next}
        />
        <img
          onKeyDown=""
          role="presentation"
          src={arrow}
          alt="arrow"
          id="arrowLeft"
          onClick={back}
        />
        <button type="button" onClick={handleClick} id="button">
          CLICK ME
        </button>
      </section>
      <section className="page02">
        <img src={logo} alt="logo" id="logoP02" />
        <img src={birds} alt="birds" id="birds" />
        <img src={montains} alt="montains" id="montains" />
        <img src={trees} alt="trees" id="trees" />
        <img src={roadPage02} alt="roadPage02" id="roadPage02" />
        <div ref={ref} />
      </section>
    </div>
  );
}

export default Home;
