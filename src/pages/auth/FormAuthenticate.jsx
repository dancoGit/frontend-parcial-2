import ButtonSubmitComponent from '../../components/button/ButtonSubmitComponent.jsx'
import InputComponent from '../../components/input/InputComponent.jsx'
import LabelComponent from '../../components/label/LabelComponent.jsx'
import LabelLinkComponent from '../../components/label/LabelLinkComponent.jsx'
import {useAuthenticateContext} from "../../context/AuthenticateContext.jsx";

const FormAuthenticate = () => {

  const {onClickLabel} = useAuthenticateContext();

  return (
    <div>
      <form id="login-form">
        <LabelComponent  label="Email" htmlFor="email" />
        <InputComponent type="email" id="email" name="email" />

        <LabelComponent label="Contraseña" htmlFor="password" />
        <InputComponent type="password" id="password" name="password"/>
        <ButtonSubmitComponent label="Iniciar sesión" />
        <div>
          <LabelComponent label="Mmm sin cuenta ... " fontSize="15px" />
          <LabelLinkComponent 
            label="regístrate!!!"
            fontSize="15px"
            onClick={onClickLabel}
            />
        </div>
      </form>
    </div>
  )
}
export default FormAuthenticate