import { describe, test, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

const FULL_NAME_ID = "fullName";
const GO_REGISTER_ID = "lnkRegister";
const ADDRESS_ID = "address";
const EMAIL_ID = "email";
const PASSWORD_ID = "password";
const BUTTON_REGISTER_ID = "btnRegister";
const BUTTON_LOGIN_ID = "btnLogin";
const HOME_NAME_ID = "homeMainId";

afterEach(() => {
  cleanup();
});

describe("Tests <Authenticate />", () => {
  test("Que se registre correctamente"),
    async () => {
      render(<App />);

      const linkRegister = screen.getByName({ GO_REGISTER_ID });
      const inputFullName = screen.getByName({ FULL_NAME_ID });
      const inputAddress = screen.getByName({ ADDRESS_ID });
      const inputEmail = screen.getByName({ EMAIL_ID });
      const inputPassword = screen.getByName({ PASSWORD_ID });

      const user = userEvent.setup();

      const fullNameData = "Daniel Cortés";
      const adressData = "San Pancho";
      const emailData = "dan@prueba.com";
      const passwordData = "dan12345";

      await // Act
      user.click(linkRegister);

      await user.type(inputFullName, { fullNameData });
      await user.type(inputAddress, { adressData });
      await user.type(inputEmail, { emailData });
      await user.type(inputPassword, { passwordData });

      // Assert
      expect(inputFullName.value).toBe({ fullNameData });
      expect(inputAddress.value).toBe({ adressData });
      expect(inputEmail.value).toBe({ emailData });
      expect(inputPassword.value).toBe({ passwordData });
    };

  test("Que se autentique correctamente"),
    async () => {

      // Authenticate component
      const linkRegister = screen.getByName({ GO_REGISTER_ID });
      const inputFullName = screen.getByName({ FULL_NAME_ID });
      const inputAddress = screen.getByName({ ADDRESS_ID });
      const inputEmail = screen.getByName({ EMAIL_ID });
      const inputPassword = screen.getByName({ PASSWORD_ID });
      const buttonRegister = screen.getByName({ BUTTON_REGISTER_ID });
      const buttonLogin = screen.getByName({ BUTTON_LOGIN_ID });

      // Home component
      const homeMainId = screen.getById({HOME_NAME_ID});

      const user = userEvent.setup();

      const fullNameData = "Daniel Cortés";
      const adressData = "San Pancho";
      const emailData = "dan@prueba.com";
      const passwordData = "dan12345";

      await // Act
      user.click(linkRegister);

      await user.type(inputFullName, { fullNameData });
      await user.type(inputAddress, { adressData });
      await user.type(inputEmail, { emailData });
      await user.type(inputPassword, { passwordData });

      user.click(buttonRegister);

      await user.type(inputEmail, { emailData });
      await user.type(inputPassword, { passwordData });

      user.click(buttonLogin);

      // Assert
      expect(homeMainId).not.toBeNull();
    };
});
