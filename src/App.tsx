import ComponentsJorge from './ComponentsJorge'
import Alert from './components/Alert/Alert'
import useProgrammableAlert from './components/Alert/AlertContainer'
import {
  BreadCrumbContainer,
  BreadCrumbItem,
} from './components/BreadCrumb/BreadCrumb'

// arquivo para testar os componentes sendo desenvolvidos
function App() {
  const [AlertContainer, showAlert] = useProgrammableAlert()
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

      <BreadCrumbContainer
        divider={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`}
      >
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
        <BreadCrumbItem isActive href="#">
          asdasdasd
        </BreadCrumbItem>
      </BreadCrumbContainer>

      <hr />

      <ComponentsJorge />
    </div>
  )
}

export default App
