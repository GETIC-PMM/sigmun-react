import Badge from './components/Badge/Badge'
import Button from './components/Button/Button'
import ButtonGroup from './components/ButtonGroup/ButtonGroup'

const ComponentsJorge = () => {
  return (
    <div>
      <h1>Badge</h1>
      <div className="d-flex flex-column gap-4">
        <div>
          <div>Botões</div>
          <Button>
            Notificações
            <Badge badgeFor="button" type="secondary">
              4
            </Badge>
          </Button>
        </div>

        <div>
          <div>Posicionado</div>
          <div className="d-flex gap-5">
            <button
              onClick={() => console.log('a')}
              type="button"
              className="btn btn-primary position-relative"
            >
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
          <div className="d-flex gap-4">
            <button type="button" className="btn btn-primary position-relative">
              Perfil
              <Badge badgeFor="buttonDetail" type="danger"></Badge>
            </button>
            <button type="button" className="btn btn-primary position-relative">
              Perfil
              <Badge
                badgeFor="buttonDetail"
                type="danger"
                bgPosition="bottom-left"
              ></Badge>
            </button>
            <button type="button" className="btn btn-primary position-relative">
              Perfil
              <Badge
                badgeFor="buttonDetail"
                type="danger"
                bgPosition="bottom-right"
              ></Badge>
            </button>
            <button type="button" className="btn btn-primary position-relative">
              Perfil
              <Badge
                badgeFor="buttonDetail"
                type="danger"
                bgPosition="top-left"
              ></Badge>
            </button>
          </div>
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
      <h1>Button</h1>
      <div className="d-flex flex-column gap-2">
        Botão simples
        <div className="d-flex gap-2">
          <Button onClick={() => console.log('a')}>Primary</Button>
          <Button btnType="secondary">Secondary</Button>
          <Button btnType="danger">Danger</Button>
          <Button btnType="dark">Dark</Button>
          <Button btnType="info">Info</Button>
          <Button btnType="light">Light</Button>
          <Button btnType="success">Success</Button>
          <Button btnType="warning">Warning</Button>
          <Button btnType="link">Link</Button>
        </div>
        Botão desativado
        <div className="d-flex gap-2">
          <Button disabled>Primary</Button>
          <Button disabled btnType="secondary">
            Secondary
          </Button>
          <Button disabled btnType="danger">
            Danger
          </Button>
          <Button disabled btnType="dark">
            Dark
          </Button>
          <Button disabled btnType="info">
            Info
          </Button>
          <Button disabled btnType="light">
            Light
          </Button>
          <Button disabled btnType="success">
            Success
          </Button>
          <Button disabled btnType="warning">
            Warning
          </Button>
          <Button disabled btnType="link">
            Link
          </Button>
        </div>
        Botão outlined
        <div className="d-flex gap-2">
          <Button outlined>Primary</Button>
          <Button outlined btnType="secondary">
            Secondary
          </Button>
          <Button outlined btnType="danger">
            Danger
          </Button>
          <Button outlined btnType="dark">
            Dark
          </Button>
          <Button outlined btnType="info">
            Info
          </Button>
          <Button outlined btnType="light">
            Light
          </Button>
          <Button outlined btnType="success">
            Success
          </Button>
          <Button outlined btnType="warning">
            Warning
          </Button>
          <Button outlined btnType="link">
            Link
          </Button>
        </div>
        Botão outlined desativado
        <div className="d-flex gap-2">
          <Button disabled outlined>
            Primary
          </Button>
          <Button disabled outlined btnType="secondary">
            Secondary
          </Button>
          <Button disabled outlined btnType="danger">
            Danger
          </Button>
          <Button disabled outlined btnType="dark">
            Dark
          </Button>
          <Button disabled outlined btnType="info">
            Info
          </Button>
          <Button disabled outlined btnType="light">
            Light
          </Button>
          <Button disabled outlined btnType="success">
            Success
          </Button>
          <Button disabled outlined btnType="warning">
            Warning
          </Button>
          <Button disabled outlined btnType="link">
            Link
          </Button>
        </div>
        Variações de tamanho
        <div className="d-flex gap-2">
          <div>
            <Button btnType="primary" size="sm">
              Small
            </Button>
          </div>

          <div>
            <Button btnType="primary" size="lg">
              Large
            </Button>
          </div>
        </div>
        Botão ativo
        <div className="d-flex gap-2">
          <Button btnType="primary">1</Button>
          <Button btnType="primary" active>
            2
          </Button>
          <Button btnType="primary">3</Button>
        </div>
      </div>
      <br />
      <hr />
      <h1>Button Group</h1>
      <div className="d-flex flex-column gap-2">
        Formato padrão
        <div>
          <ButtonGroup>
            <Button>Esquerdo</Button>
            <Button>Meio</Button>
            <Button>Direito</Button>
          </ButtonGroup>
        </div>
        Formato com selected/active
        <div>
          <ButtonGroup>
            <Button>Esquerdo</Button>
            <Button active>Meio</Button>
            <Button>Direito</Button>
          </ButtonGroup>
        </div>
        Formato com disabled
        <div>
          <ButtonGroup>
            <Button>Esquerdo</Button>
            <Button disabled>Meio</Button>
            <Button>Direito</Button>
          </ButtonGroup>
        </div>
        Variação com outline
        <div>
          <ButtonGroup>
            <Button outlined>Esquerdo</Button>
            <Button outlined>Meio</Button>
            <Button outlined>Direito</Button>
          </ButtonGroup>
        </div>
        Variação vertical
        <div>
          <ButtonGroup vertical>
            <Button>Cima</Button>
            <Button>Meio</Button>
            <Button>Baixo</Button>
          </ButtonGroup>
        </div>
        Grupo com radio-button
        <div>
          <ButtonGroup>
            <input
              type="radio"
              className="btn-check"
              name="vbtn-radio"
              id="vbtn-radio1"
              autoComplete="off"
              checked
            />
            <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">
              Radio 1
            </label>
            <input
              type="radio"
              className="btn-check"
              name="vbtn-radio"
              id="vbtn-radio2"
              autoComplete="off"
            />
            <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">
              Radio 2
            </label>
            <input
              type="radio"
              className="btn-check"
              name="vbtn-radio"
              id="vbtn-radio3"
              autoComplete="off"
            />
            <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">
              Radio 3
            </label>
          </ButtonGroup>
        </div>
        Grupo com input
        <div className="col-2">
          <ButtonGroup inputGroup prependText="@">
            <input type="text" className="form-control" />
          </ButtonGroup>
        </div>
      </div>
    </div>
  )
}

export default ComponentsJorge
