import { loginOrangeHRM } from "../../pages/login";

let login = new loginOrangeHRM();

describe("Login functionality", () => {
  beforeEach(() => {
    login.navigation();
  });

  it("Login with valid credentials", () => {
    login.loginCredentials("Admin", "admin123");
    login.validateLogo();
  });

  it("Login with invalid credentials", () => {
    login.loginCredentials("Ati", "Ati123");
    login.validatErrorMsg();
  });
});
