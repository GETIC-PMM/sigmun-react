declare const Navbar: import("../../utils/types").CompoundedComponent<import("./types").NavbarProps> & {
    Item: import("../../utils/types").CompoundedComponent<import("./types").NavbarItemProps>;
    Dropdown: import("../../utils/types").CompoundedComponent<import("./types").NavbarDropdownProps>;
};
export default Navbar;
