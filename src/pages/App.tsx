import React, { useEffect, useState } from "react";
import globalStyles from "../styles/global";
import GeniusButton from "../components/GeniusButton";
import MenuButton from "../components/MenuButton";
import * as S from "../styles/styled";
import Score from "../components/Score";
import Status from "../components/Status";
import HighScore from "../components/HighScore";

const App: React.FC = () => {
  globalStyles();

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

  const click = (color: number) => {
    if (playerTime) {
      createColorElement(color);
      setClickedOrder((newClickedOrder) => [...newClickedOrder, color]);
      setTimeout(() => {
        setSelected(() => ["off", "off", "off", "off", "off"]);
      }, 250);
    }
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

  const lose = () => {
    setAlert(() => "Você perdeu :( ");
    setPlayerTime(() => false);
    setOrder(() => []);
    setTimeout(() => {
      setSelected(() => ["off", "off", "off", "off", "on"]);
    }, 500);
  };

  const createColorElement = (element: number) => {
    if (element === 0) {
      setSelected(() => ["on", "off", "off", "off", "off"]);
    } else if (element === 1) {
      setSelected(() => ["off", "on", "off", "off", "off"]);
    } else if (element === 2) {
      setSelected(() => ["off", "off", "on", "off", "off"]);
    } else if (element === 3) {
      setSelected(() => ["off", "off", "off", "on", "off"]);
    }
  };
  return (
    <S.GameContainer>
      <S.RowContainer1>
        <Status status={alert}></Status>
      </S.RowContainer1>
      <S.RowContainer2>
        <S.RowContainer4>
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
        </S.RowContainer4>
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
