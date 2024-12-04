import ButtonSubmitComponent from "../../components/button/ButtonSubmitComponent.jsx";
import InputComponent from "../../components/input/InputComponent.jsx";
import LabelComponent from "../../components/label/LabelComponent.jsx";
import LabelLinkComponent from "../../components/label/LabelLinkComponent.jsx";
import { useAuthenticateContext } from "../../context/AuthenticateContext.jsx";

const FormAuthenticate = () => {
  const { onClickLabel, onSubmitAuthenticate, handleAuthenticateChange } =
    useAuthenticateContext();

  return (
    <div>
      <form id="login-form" onSubmit={onSubmitAuthenticate}>
        <LabelComponent label="Email" htmlFor="email" />
        <InputComponent
          type="email"
          id="email"
          name="email"
          onChange={handleAuthenticateChange}
        />

        <LabelComponent label="Contraseña" htmlFor="password" />
        <InputComponent
          type="password"
          id="password"
          name="password"
          onChange={handleAuthenticateChange}
        />

        <ButtonSubmitComponent label="Iniciar sesión" />

        <div>
          <LabelComponent label="Mmm sin cuenta ... " />
          <LabelLinkComponent label="regístrate!!!" onClick={onClickLabel} />
        </div>
      </form>
    </div>
  );
};
export default FormAuthenticate;
