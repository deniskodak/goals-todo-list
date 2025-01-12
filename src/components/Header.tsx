import type { FC, PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{
  image: {
    src: string;
    alt: string;
  };
}>;

const Header: FC<HeaderProps> = (props) => {
  return (
    <header>
      <img src={props.image.src} alt={props.image.alt} />
      {props.children}
    </header>
  );
};

export default Header;
