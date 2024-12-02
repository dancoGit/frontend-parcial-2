import ButtonSubmitComponent from '../../components/button/ButtonComponent.jsx';
import InputComponent from '../../components/input/InputComponent.jsx'
import LabelComponent from '../../components/label/LabelComponent.jsx'
import LabelLinkComponent from '../../components/label/LabelLinkComponent.jsx'
import {useAuthenticateContext} from "../../context/AuthenticateContext.jsx";

const FormRegister = () => {

  const {onClickLabel, onClickSaveRegister, handleChange} = useAuthenticateContext();

  return (
    <div>
      <form id="login-form" onSubmit={onClickSaveRegister}>
        <LabelComponent  label="Nombre completo" htmlFor="email" />
        <InputComponent type="text" id="fullName" name="fullName" onChange={handleChange} />

        <LabelComponent label="Dirección" htmlFor="address" />
        <InputComponent type="text" id="address" name="address" onChange={handleChange}/>

        <LabelComponent label="Email" htmlFor="email" />
        <InputComponent type="email" id="email" name="email" onChange={handleChange}/>

        <LabelComponent label="Contraseña" htmlFor="password" />
        <InputComponent type="password" id="password" name="password" onChange={handleChange}/>

        <ButtonSubmitComponent label="Salvar" />

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