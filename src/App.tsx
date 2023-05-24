import Alert from './components/Alert/Alert'
import useAlertContainer from './components/Alert/AlertContainer'

import Badge from './components/Badge/Badge'
import {
  BreadCrumbContainer,
  BreadCrumbItem,
} from './components/BreadCrumb/BreadCrumb'
import ButtonGroup from './components/ButtonGroup/ButtonGroup'
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

      <h1>Badge</h1>
      <div className="d-flex flex-column gap-4">
        <div>
          <div>Botões</div>
          <button type="button" className="btn btn-primary position-relative">
            Notificações
            <Badge badgeFor="button" type="secondary">
              4
            </Badge>
          </button>
        </div>

        <div>
          <div>Posicionado</div>
          <div className="d-flex gap-5">
            <button type="button" className="btn btn-primary position-relative">
              Notificações
              <Badge badgeFor="buttonPositioned" type="danger">
                99+
              </Badge>
            </button>
            <button type="button" className="btn btn-primary position-relative">
              Notificações
              <Badge
                bgPosition="top-left"
                badgeFor="buttonPositioned"
                type="danger"
              >
                99+
              </Badge>
            </button>
            <button type="button" className="btn btn-primary position-relative">
              Notificações
              <Badge
                bgPosition="bottom-right"
                badgeFor="buttonPositioned"
                type="danger"
              >
                99+
              </Badge>
            </button>
            <button type="button" className="btn btn-primary position-relative">
              Notificações
              <Badge
                bgPosition="bottom-left"
                badgeFor="buttonPositioned"
                type="danger"
              >
                99+
              </Badge>
            </button>
          </div>
        </div>

        <div>
          <div>Detalhe</div>
          <button type="button" className="btn btn-primary position-relative">
            Perfil
            <Badge badgeFor="buttonDetail" type="danger"></Badge>
          </button>
        </div>

        <div>
          <div>Em linha</div>
          <div className="d-flex gap-1">
            <Badge badgeFor="text">Cor primária</Badge>
            <Badge badgeFor="text" type="secondary">
              Cor secundária
            </Badge>
            <Badge badgeFor="text" type="success">
              Sucesso
            </Badge>
            <Badge badgeFor="text" type="warning">
              Alerta
            </Badge>
            <Badge badgeFor="text" type="danger">
              Erro/Perigo
            </Badge>
          </div>
        </div>
        <div>
          <div>Icon</div>
          <a href="#" className="btn btn-outline position-relative">
            <i className="bi bi-bell"></i>
            <Badge badgeFor="icon"></Badge>
          </a>
        </div>
      </div>

      <hr />

      <h1>Button Group</h1>
      <ButtonGroup>
        <button className="btn btn-primary">oi</button>
        <button className="btn btn-primary">oi</button>
      </ButtonGroup>

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
    </div>
  )
}

export default App
