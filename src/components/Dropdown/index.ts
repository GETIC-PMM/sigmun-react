import Menu from './Menu'
import Item from './Item'
import Divider from './Divider'
import Action from './Action'

const Dropdown = Object.assign(Menu, { Item, Divider, Action })

export default Dropdown
