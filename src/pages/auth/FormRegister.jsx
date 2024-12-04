import ButtonSubmitComponent from "../../components/button/ButtonComponent.jsx";
import InputComponent from "../../components/input/InputComponent.jsx";
import LabelComponent from "../../components/label/LabelComponent.jsx";
import LabelLinkComponent from "../../components/label/LabelLinkComponent.jsx";
import { useAuthenticateContext } from "../../context/AuthenticateContext.jsx";

const FormRegister = () => {
  const { onClickLabel, onSubmiSaveRegister, handleRegisterChange} = useAuthenticateContext();

  return (
    <div>
      <form id="login-form" onSubmit={onSubmiSaveRegister}>
        <LabelComponent label="Nombre completo" htmlFor="email" />
        <InputComponent
          type="text"
          id="fullName"
          name="fullName"
          onChange={handleRegisterChange}
        />

        <LabelComponent label="Dirección" htmlFor="address" />
        <InputComponent
          type="text"
          id="address"
          name="address"
          onChange={handleRegisterChange}
        />

        <LabelComponent label="Email" htmlFor="email" />
        <InputComponent
          type="email"
          id="email"
          name="email"
          onChange={handleRegisterChange}
        />

        <LabelComponent label="Contraseña" htmlFor="password" />
        <InputComponent
          type="password"
          id="password"
          name="password"
          onChange={handleRegisterChange}
        />

        <ButtonSubmitComponent label="Salvar" />

        <div>
          <LabelComponent label="Ah sí tienes cuenta ... "/>
          <LabelLinkComponent
            label="autentícate!!!"
            onClick={onClickLabel}
          />
        </div>
      </form>
    </div>
  );
};
export default FormRegister;
