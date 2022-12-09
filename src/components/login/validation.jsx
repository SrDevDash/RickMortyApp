const redex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function validate(data) {
  let erros = {};
  if (
    data.username === "" ||
    !redex.test(data.username) ||
    data.username.length > 35
  ) {
    erros.username = "Username is not valid";
  }
  if (data.password.length < 6 || data.password.length > 10) {
    erros.password = "Password must be between 6-10 length";
  }
  if (!/[0-9]/.test(data.password))
    erros.password = "Password must have at least one number";

  return erros;
}
