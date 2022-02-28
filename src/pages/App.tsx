import React, { useEffect, useState } from "react";
import globalStyles from "../styles/global";
import GeniusButton from "../components/GeniusButton";
import MenuButton from "../components/MenuButton";
import * as S from "../styles/styled";
import Score from "../components/Score";
import Status from "../components/Status";
import HighScore from "../components/HighScore";
import SoundButton1 from "/SoundEffect1.mp3";
import SoundButton2 from "/SoundEffect2.mp3";
import SoundButton3 from "/SoundEffect3.mp3";
import SoundButton4 from "/SoundEffect4.mp3";
import SoundButton5 from "/SoundEffect5.mp3";
import { Howler, Howl } from "howler";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
  TelegramShareButton,
  TelegramIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const App: React.FC = () => {
  globalStyles();

  var SoundEffect1 = new Howl({
    src: [SoundButton1],
  });
  var SoundEffect2 = new Howl({
    src: [SoundButton2],
  });
  var SoundEffect3 = new Howl({
    src: [SoundButton3],
  });
  var SoundEffect4 = new Howl({
    src: [SoundButton4],
  });
  var SoundEffect5 = new Howl({
    src: [SoundButton5],
  });

  const [selected, setSelected] = useState<string[]>([
    "off",
    "off",
    "off",
    "off",
    "on",
  ]);
  const [score, setScore] = useState<number>(0);
  const [order, setOrder] = useState<number[]>([]);
  const [clickedOrder, setClickedOrder] = useState<number[]>([]);
  const [playerTime, setPlayerTime] = useState<boolean>(false);
  const [alert, setAlert] = useState<string>(
    "Aperte Novo Jogo para iniciar uma nova partida"
  );

  const playGame = () => {
    setSelected(() => ["off", "off", "off", "off", "off"]);
    setOrder([]);
    setClickedOrder([]);
    setScore(0);
    nextLevel();
  };

  const setHighscore = (chave: string, valor: string) => {
    localStorage.setItem(chave, valor);
  };

  useEffect(() => {
    console.log(String(score));
    if (score > Number(localStorage.getItem("Highscore"))) {
      localStorage.removeItem("Highscore");
      setHighscore("Highscore", JSON.stringify(score));
    }
  }, [score]);

  const nextLevel = () => {
    setScore((newScore) => newScore + 1);
    shuffleOrder();
  };

  const shuffleOrder = () => {
    const colorOrder = Math.floor(Math.random() * 4);
    setOrder((oldOrder) => [...oldOrder, colorOrder]);
  };

  useEffect(() => {
    setPlayerTime(() => false);
    for (const i in order) {
      const elementColor = order[i];
      lightColor(elementColor, Number(i) + 1);
    }
  }, [order]);

  const lightColor = (element: number, number: number) => {
    number *= 500;
    setTimeout(() => {
      createColorElement(element);
    }, number - 250);
    setTimeout(() => {
      setSelected(() => ["off", "off", "off", "off", "off"]);
      if (number / 500 == order.length) {
        setPlayerTime(() => true);
        setAlert(() => "Sua vez");
      }
    }, number);
  };

  useEffect(() => {
    if (order.length != 0) {
      let stop = 0;
      for (const i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
          stop = 1;
          lose();
          break;
        }
      }
      if (clickedOrder.length === order.length && stop == 0) {
        setTimeout(() => {
          setAlert(() => "Parabéns! Minha vez");
          setClickedOrder(() => []);
          nextLevel();
        }, 500);
      }
    }
  }, [clickedOrder]);

  const click = (color: number) => {
    if (playerTime) {
      setClickedOrder((newClickedOrder) => [...newClickedOrder, color]);
      createColorElement(color);

      setTimeout(() => {
        setSelected(() => ["off", "off", "off", "off", "off"]);
      }, 250);
    }
  };

  const lose = () => {
    setAlert(() => "Você perdeu :( ");
    Howler.stop();
    SoundEffect5.play();
    setPlayerTime(() => false);
    setOrder(() => []);
    setTimeout(() => {
      setSelected(() => ["off", "off", "off", "off", "on"]);
    }, 500);
  };

  const createColorElement = (element: number) => {
    if (element === 0) {
      SoundEffect1.play();
      setSelected(() => ["on", "off", "off", "off", "off"]);
    } else if (element === 1) {
      SoundEffect2.play();
      setSelected(() => ["off", "on", "off", "off", "off"]);
    } else if (element === 2) {
      SoundEffect3.play();
      setSelected(() => ["off", "off", "on", "off", "off"]);
    } else if (element === 3) {
      SoundEffect4.play();
      setSelected(() => ["off", "off", "off", "on", "off"]);
    }
  };
  return (
    <S.GameContainer>
      <S.RowContainer4>
        <FacebookShareButton
          url="https://genius-react.vercel.app/"
          quote={`Eu atingi a pontuação ${localStorage.getItem(
            "Highscore"
          )}, venha bater meu recorde`}
        >
          <FacebookIcon round={true}></FacebookIcon>
          <WhatsappShareButton
            url="https://genius-react.vercel.app/"
            title={`Eu atingi a pontuação ${localStorage.getItem(
              "Highscore"
            )}, venha bater meu recorde`}
          >
            <WhatsappIcon round={true}></WhatsappIcon>
            <TwitterShareButton
              url="https://genius-react.vercel.app/"
              title={`Eu atingi a pontuação ${localStorage.getItem(
                "Highscore"
              )}, venha bater meu recorde`}
            >
              <TwitterIcon round={true}></TwitterIcon>
            </TwitterShareButton>
            <TelegramShareButton
              url="https://genius-react.vercel.app/"
              title={`Eu consegui atingi a pontuação ${localStorage.getItem(
                "Highscore"
              )}, venha bater meu recorde`}
            >
              {" "}
              <TelegramIcon round={true}></TelegramIcon>
            </TelegramShareButton>
          </WhatsappShareButton>
        </FacebookShareButton>
      </S.RowContainer4>
      <S.RowContainer1>
        <Status status={alert}></Status>
      </S.RowContainer1>
      <S.RowContainer2>
        <S.ColumnContainer1>
          <S.Genius>
            <GeniusButton
              color={"blue"}
              opacity={selected[0]}
              onClick={() => click(0)}
            />
            <GeniusButton
              color={"yellow"}
              opacity={selected[1]}
              onClick={() => click(1)}
            />
            <GeniusButton
              color={"red"}
              opacity={selected[2]}
              onClick={() => click(2)}
            />
            <GeniusButton
              color={"green"}
              opacity={selected[3]}
              onClick={() => click(3)}
            />
          </S.Genius>
        </S.ColumnContainer1>
        <S.ColumnContainer2>
          <S.RowContainer3>
            <Score score={score} />
            <HighScore
              HighScore={String(localStorage.getItem("Highscore"))}
            ></HighScore>
          </S.RowContainer3>
          <MenuButton
            color={"blue"}
            opacity={selected[4]}
            onClick={() => playGame()}
            content={"Novo Jogo"}
          ></MenuButton>
        </S.ColumnContainer2>
      </S.RowContainer2>
    </S.GameContainer>
  );
};

export default App;
