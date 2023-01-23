import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useNavigate } from "react-router-dom";

function CardCaro() {
  const navigate = useNavigate();
  const gameInformation = (d) => {
    navigate(`../games-info/${d}`);
  };
  const games = [
    {
      name: "FINAL FANTASY XIV: Endwalker",
      image:
        "https://media.rawg.io/media/games/bf5/bf5ac217a9e10ff98301e8359a870dc1.jpg",
      id: 681399,
      score: 91,
    },
    {
      name: "NieR:Automata",
      image:
        "https://media.rawg.io/media/games/219/2191c87e13c5fac11afa3e07dd991d7a.jpg",
      id: 297208,
      score: 91,
    },
    {
      name: "Persona 5 Royal",
      image:
        "https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg",
      id: 339958,
      score: 94,
    },
    {
      name: "Elden Ring",
      image:
        "https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg",
      id: 326243,
      score: 95,
    },
    {
      name: "Danganronpa 2: Goodbye Despair",
      image:
        "https://media.rawg.io/media/games/a6c/a6cd31267a20a615d35f618e766208fc.jpg",
      id: 3594,
      score: 84,
    },
    {
      name: "Fire Emblem: Three Houses",
      image:
        "https://media.rawg.io/media/games/530/53081dbd5003f990fa5312404ac3d71a.jpg",
      id: 246478,
      score: 89,
    },
  ];
  //This displays my pick of games from the list that i enjoy
  return (
    <div className="carousel-container">
      <Splide
        className="test-slide-container"
        options={{
          perPage: 3,
          type: "loop",
          gap: "2rem",
          pagination: false,
          drag: "free",
          arrows: false,
          autoplay: true,
        }}
        aria-label="My favorite selection of games"
      >
        <SplideSlide
          className="test-slide"
          onClick={() => gameInformation(games[0].id)}
        >
          <img src={games[0].image} alt={games[0].name} />
          <div className="test-slide-grad"></div>
          <p className="test-slide-score">{games[0].score}</p>
          <p className="test-slide-text">{games[0].name}</p>
        </SplideSlide>

        <SplideSlide
          className="test-slide"
          onClick={() => gameInformation(games[1].id)}
        >
          <img src={games[1].image} alt={games[1].name} />
          <div className="test-slide-grad"></div>
          <p className="test-slide-score">{games[1].score}</p>
          <p className="test-slide-text">{games[1].name}</p>
        </SplideSlide>

        <SplideSlide
          className="test-slide"
          onClick={() => gameInformation(games[2].id)}
        >
          <img src={games[2].image} alt={games[2].name} />
          <div className="test-slide-grad"></div>
          <p className="test-slide-score">{games[2].score}</p>
          <p className="test-slide-text">{games[2].name}</p>
        </SplideSlide>

        <SplideSlide
          className="test-slide"
          onClick={() => gameInformation(games[3].id)}
        >
          <img src={games[3].image} alt={games[3].name} />
          <div className="test-slide-grad"></div>
          <p className="test-slide-score">{games[3].score}</p>
          <p className="test-slide-text">{games[3].name}</p>
        </SplideSlide>

        <SplideSlide
          className="test-slide"
          onClick={() => gameInformation(games[4].id)}
        >
          <img src={games[4].image} alt={games[4].name} />
          <div className="test-slide-grad"></div>
          <p className="test-slide-score">{games[4].score}</p>
          <p className="test-slide-text">{games[4].name}</p>
        </SplideSlide>

        <SplideSlide
          className="test-slide"
          onClick={() => gameInformation(games[5].id)}
        >
          <img src={games[5].image} alt={games[5].name} />
          <div className="test-slide-grad"></div>
          <p className="test-slide-score">{games[5].score}</p>
          <p className="test-slide-text">{games[5].name}</p>
        </SplideSlide>
      </Splide>
    </div>
  );
}
export default CardCaro;
