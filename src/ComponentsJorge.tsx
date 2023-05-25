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

      <h1>Button</h1>
      <div className="d-flex flex-column gap-2">
        Botão simples
        <div className="d-flex gap-2">
          <Button>Primary</Button>
          <Button btnType="secondary">Secondary</Button>
          <Button btnType="danger">Danger</Button>
          <Button btnType="dark">Dark</Button>
          <Button btnType="info">Info</Button>
          <Button btnType="light">Light</Button>
          <Button btnType="success">Success</Button>
          <Button btnType="warning">Warning</Button>
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
      <div className="">
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </ButtonGroup>
        <br />
        <br />
        <ButtonGroup>
          <Button outlined>1</Button>
          <Button outlined>2</Button>
          <Button outlined disabled>
            3
          </Button>
        </ButtonGroup>
        <br />
        <br />
        <ButtonGroup vertical>
          <Button btnType="success">1</Button>
          <Button btnType="success">2</Button>
          <Button btnType="success">3</Button>
        </ButtonGroup>
        <br />
        <br />
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
