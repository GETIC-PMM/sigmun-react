declare const Input: import("../../utils/types").CompoundedComponent<import("./types").InputGroupProps> & {
    Box: import("../../utils/types").CompoundedComponent<import("./types").InputProps>;
    Addon: import("../../utils/types").CompoundedComponent<import("./types").AddonProps>;
    Label: import("../../utils/types").CompoundedComponent<import("./types").LabelProps>;
    Switch: import("../../utils/types").CompoundedComponent<import("./types").RestInputProps>;
    Checkbox: import("../../utils/types").CompoundedComponent<import("./types").RestInputProps>;
    Radio: import("../../utils/types").CompoundedComponent<import("./types").RestInputProps>;
    Slider: import("../../utils/types").CompoundedComponent<import("./types").RestInputProps>;
};
export default Input;
