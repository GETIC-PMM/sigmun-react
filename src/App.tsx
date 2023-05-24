import ComponentsJorge from './ComponentsJorge'
import Alert from './components/Alert/Alert'
import useAlertContainer from './components/Alert/AlertContainer'
import {
  BreadCrumbContainer,
  BreadCrumbItem,
} from './components/BreadCrumb/BreadCrumb'

// arquivo para testar os componentes sendo desenvolvidos
function App() {
  const { AlertContainer, showAlert } = useAlertContainer()
  return (
    <div className="p-4">
      <h1>Alert</h1>
      <Alert type="primary" enableClose>
        Esse aqui da p fechar
      </Alert>
      <Alert type="info" enableClose={false}>
        Esse aq nao da
      </Alert>

      <hr />

      <AlertContainer />
      <button
        onClick={() => showAlert('alerta gerado pelo butao', 'primary', 3000)}
      >
        BUTAO AQUI
      </button>

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
        divider={`url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'
          width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;)`}
      >
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
        <BreadCrumbItem isActive href="#">
          asdasdas
        </BreadCrumbItem>
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
        <BreadCrumbItem href="#">asdasdas</BreadCrumbItem>
      </BreadCrumbContainer>

      <hr />

      <ComponentsJorge />
    </div>
  )
}

export default App
