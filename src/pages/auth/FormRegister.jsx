import ButtonComponent from '../../components/button/ButtonComponent.jsx'
import InputComponent from '../../components/input/InputComponent.jsx'
import LabelComponent from '../../components/label/LabelComponent.jsx'
import LabelLinkComponent from '../../components/label/LabelLinkComponent.jsx'
import {useAuthenticateContext} from "../../context/AuthenticateContext.jsx";

const FormRegister = () => {

  const {onClickLabel, onClickSaveRegister} = useAuthenticateContext();

  return (
    <div>
      <form id="login-form">
        <LabelComponent  label="Nombre" htmlFor="email" />
        <InputComponent type="email" id="email" name="email" />

        <LabelComponent label="Apellido" htmlFor="password" />
        <InputComponent type="password" id="password" name="password"/>
        <ButtonComponent label="Salvar" onClick={onClickSaveRegister} />

        <div>
          <LabelComponent label="Ahhhh sí tienes cuenta ... " fontSize="15px" />
          <LabelLinkComponent 
            label="autentícate!!!"
            fontSize="15px"
            onClick={onClickLabel}
            />
        </div>
      </form>
    </div>
  )
}
export default FormRegister