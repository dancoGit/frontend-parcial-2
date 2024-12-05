import ButtonSubmitComponent from "../../components/button/ButtonComponent.jsx";
import InputComponent from "../../components/input/InputComponent.jsx";
import LabelComponent from "../../components/label/LabelComponent.jsx";
import LabelLinkComponent from "../../components/label/LabelLinkComponent.jsx";
import { useAuthenticateContext } from "../../context/AuthenticateContext.jsx";

const FULL_NAME = "fullName";
const ADDRESS = "address";
const EMAIL_ID = "email";
const PASSWORD_ID = "password";
const BUTTON_REGISTER_ID = "btnRegister";

const FormRegister = () => {
  const { onClickLabel, onSubmiSaveRegister, handleRegisterChange } =
    useAuthenticateContext();

  return (
    <div>
      <form id="login-form" onSubmit={onSubmiSaveRegister}>
        <LabelComponent
          id={FULL_NAME}
          name={FULL_NAME}
          label="Nombre completo"
          htmlFor={FULL_NAME}
        />
        <InputComponent
          type="text"
          id={FULL_NAME}
          name={FULL_NAME}
          onChange={handleRegisterChange}
        />

        <LabelComponent label="Dirección" htmlFor={ADDRESS} />
        <InputComponent
          type="text"
          id={ADDRESS}
          name={ADDRESS}
          onChange={handleRegisterChange}
        />

        <LabelComponent label="Email" htmlFor={EMAIL_ID} />
        <InputComponent
          type={EMAIL_ID}
          id={EMAIL_ID}
          name={EMAIL_ID}
          onChange={handleRegisterChange}
        />

        <LabelComponent label="Contraseña" htmlFor={PASSWORD_ID} />
        <InputComponent
          type={PASSWORD_ID}
          id={PASSWORD_ID}
          name={PASSWORD_ID}
          onChange={handleRegisterChange}
        />

        <ButtonSubmitComponent
          id={BUTTON_REGISTER_ID}
          name={BUTTON_REGISTER_ID}
          label="Salvar"
        />

        <div>
          <LabelComponent label="Ah, sí tienes cuenta ... " />
          <LabelLinkComponent label="autentícate!!!" onClick={onClickLabel} />
        </div>
      </form>
    </div>
  );
};
export default FormRegister;
