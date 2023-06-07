import Container from './Container'
import Body from './Body'
import Footer from './Footer'
import Title from './Title'
import Img from './Img'
import Header from './Header'
import Text from './Text'

const Card = Object.assign(Container, {
  Body,
  Footer,
  Header,
  Img,
  Text,
  Title,
})

export default Card
