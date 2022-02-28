import * as S from "./styled";

type props = {
  score: number;
};

const Score = ({ score }: props) => {
  return (
    <S.Score>
      <span>Score Atual</span>
      <span>{score}</span>
    </S.Score>
  );
};

export default Score;
