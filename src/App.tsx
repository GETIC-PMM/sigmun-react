import Alert from './components/Alert/Alert'
import useAlertContainer from './components/Alert/AlertContainer'

// arquivo para testar os componentes sendo desenvolvidos
function App() {
  const { AlertContainer, showAlert } = useAlertContainer()
  return (
    <div>
      <Alert type="primary" enableClose>
        Esse aqui da p fechar
      </Alert>
      <Alert type="info" enableClose>
        Esse aq nao da
      </Alert>
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
