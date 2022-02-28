import * as S from "./styled";

type props = {
  HighScore: string;
};

const HighScore = ({ HighScore }: props) => {
  return (
    <S.HighScore>
      <span>Recorde Atual</span>
      <span>{HighScore}</span>
    </S.HighScore>
  );
};

export default HighScore;
