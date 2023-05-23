import Alert from './components/Alert/Alert'
import useAlertContainer from './components/Alert/AlertContainer'

import Badge from './components/Badge'
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
          <button type="button" className="btn btn-primary position-relative">
            Notificações
            <Badge badgeFor="buttonPositioned" type="danger">
              99+
            </Badge>
          </button>
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
      <AlertContainer />
      <button
        onClick={() => showAlert('alerta gerado pelo butao', 'primary', 3000)}
      >
        BUTAO AQUI
      </button>
    </div>
  )
}

export default App
