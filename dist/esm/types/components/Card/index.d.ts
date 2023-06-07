declare const Card: import("../../utils/types").CompoundedComponent<import("./types").CardContainerProps> & {
    Body: import("../../utils/types").CompoundedComponent<import("./types").CardProps>;
    Footer: import("../../utils/types").CompoundedComponent<import("./types").CardProps>;
    Header: import("../../utils/types").CompoundedComponent<import("./types").CardProps>;
    Img: import("../../utils/types").CompoundedComponent<import("./types").CardImgProps>;
    Text: import("../../utils/types").CompoundedComponent<import("./types").CardProps>;
    Title: import("../../utils/types").CompoundedComponent<import("./types").CardProps>;
};
export default Card;
