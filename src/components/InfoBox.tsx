import type { FC, PropsWithChildren } from "react";

type InfoBoxProps = PropsWithChildren<{
  type?: "info";
}>;

type WarningBoxProps = PropsWithChildren<{
  type: "warning";
  severity: "low" | "medium" | "high";
}>;

const InfoBox: FC<InfoBoxProps | WarningBoxProps> = (props) => {
  return (
    <aside
      className={`infobox ${
        props.type === "warning"
          ? `infobox-warning warning--${props.severity}`
          : "infobox-info"
      }`}
    >
      {props.type === "warning" && <h2>Warning</h2>}
      {props.children}
    </aside>
  );
};

export default InfoBox;
