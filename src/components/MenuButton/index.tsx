import * as S from "./styled";
import type * as Stitches from "@stitches/react";

type MyButtonProps = {
  color: Stitches.VariantProps<typeof MenuButton>;
  opacity: Stitches.VariantProps<typeof MenuButton>;
  onClick: any;
  content: string;
};

const MenuButton = (props: MyButtonProps) => {
  return (
    <S.MenuButton
      ButtonColor={props.color}
      OnOff={props.opacity}
      onClick={() => props.onClick()}
    >
      {props.content}
    </S.MenuButton>
  );
};

export default MenuButton;
