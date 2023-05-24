import Badge from './components/Badge/Badge'
import ButtonGroup from './components/ButtonGroup/ButtonGroup'

const ComponentsJorge = () => {
  return (
    <div>
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
    </div>
  )
}

export default ComponentsJorge
