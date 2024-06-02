import { CustomTitleProps } from "../types";

const CustomTitle = (props: CustomTitleProps) => {
  return <div className={props.className}>{props.title}</div>;
};

export default CustomTitle;
