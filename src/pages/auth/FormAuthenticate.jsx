import ButtonSubmitComponent from "../../components/button/ButtonSubmitComponent.jsx";
import InputComponent from "../../components/input/InputComponent.jsx";
import LabelComponent from "../../components/label/LabelComponent.jsx";
import LabelLinkComponent from "../../components/label/LabelLinkComponent.jsx";
import { useAuthenticateContext } from "../../context/AuthenticateContext.jsx";

const EMAIL_ID = "email";
const PASSWORD_ID = "password";
const BUTTON_LOGIN_ID = "btnLogin";
const GO_REGISTER_ID = "lnkRegister";

const FormAuthenticate = () => {
  const { onClickLabel, onSubmitAuthenticate, handleAuthenticateChange } =
    useAuthenticateContext();

  return (
    <div>
      <form id="login-form" onSubmit={onSubmitAuthenticate}>
        <LabelComponent label="Email" htmlFor={EMAIL_ID} />
        <InputComponent
          type={EMAIL_ID}
          id={EMAIL_ID}
          name={EMAIL_ID}
          onChange={handleAuthenticateChange}
        />

        <LabelComponent label="Contraseña" htmlFor={PASSWORD_ID} />
        <InputComponent
          type={PASSWORD_ID}
          id={PASSWORD_ID}
          name={PASSWORD_ID}
          onChange={handleAuthenticateChange}
        />

        <ButtonSubmitComponent
          id={BUTTON_LOGIN_ID}
          name={BUTTON_LOGIN_ID}
          label="Iniciar sesión"
        />

        <div>
          <LabelComponent label="Mmm sin cuenta ... " />
          <LabelLinkComponent
            id={GO_REGISTER_ID}
            name={GO_REGISTER_ID}
            label="regístrate!!!"
            onClick={onClickLabel}
          />
        </div>
      </form>
    </div>
  );
};
export default FormAuthenticate;
