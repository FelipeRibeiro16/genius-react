import * as S from "./styled";
import type * as Stitches from "@stitches/react";

type MyButtonProps = {
  color: Stitches.VariantProps<typeof GeniusButton>;
  opacity: Stitches.VariantProps<typeof GeniusButton>;
  onClick: Function;
};

const GeniusButton = (props: MyButtonProps) => {
  return (
    <S.GeniusButton
      ButtonColor={props.color}
      OnOff={props.opacity}
      onClick={() => props.onClick()}
    ></S.GeniusButton>
  );
};

export default GeniusButton;
