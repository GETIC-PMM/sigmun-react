import ComponentsJorge from './ComponentsJorge'
import Alert from './components/Alert/Alert'
import useAlertContainer from './components/Alert/AlertContainer'
import {
  BreadCrumbContainer,
  BreadCrumbItem,
} from './components/BreadCrumb/BreadCrumb'

// arquivo para testar os componentes sendo desenvolvidos
function App() {
  const [AlertContainer, showAlert] = useAlertContainer()
  return (
    <div className="p-4">
      <h1>Alert</h1>
      <Alert type="primary" enableClose>
        Esse aqui da p fechar
      </Alert>
      <Alert type="info" enableClose={false}>
        Esse aq nao da
      </Alert>

      <AlertContainer />
      <button
        onClick={() => showAlert('alerta gerado pelo butao', 'danger', 3000)}
      >
        BUTAO AQUI
      </button>

      <hr />

      <h1>Breadcrumb</h1>
      <BreadCrumbContainer>
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
        <BreadCrumbItem isActive href="#">
          asdasdas
        </BreadCrumbItem>
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
      </BreadCrumbContainer>

      <BreadCrumbContainer disableDividers>
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
      </BreadCrumbContainer>

      <BreadCrumbContainer divider=">">
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
        <BreadCrumbItem isActive href="#">
          asdasdas
        </BreadCrumbItem>
      </BreadCrumbContainer>

      <hr />

      <ComponentsJorge />
    </div>
  )
}

export default App
