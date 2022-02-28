import * as S from "./styled";

type props = {
  status: string;
};

const Status = ({ status }: props) => {
  return <S.Status>{status}</S.Status>;
};

export default Status;
