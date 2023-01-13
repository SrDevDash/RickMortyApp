import React from "react";
import validate from "./validation";
import style from "./login.module.css";

export default function Login(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErros] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErros(validate(userData));

    !(errors === {}) && props.login(userData);
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Log in</h1>
      <div className={style.credencialBox}>
        <label>Email: test@gmail.com</label>
        <label>Password: 123456</label>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          className={style.input}
          onChange={handleInputChange}
          name="username"
          value={userData.username}
          type="text"
          placeholder="Username"
        />
        <p className={style.warning}>{errors.username}</p>

        <input
          className={style.input}
          onChange={handleInputChange}
          name="password"
          value={userData.password}
          placeholder="Password"
          type="password"
        />
        <p className={style.warning}>{errors.password}</p>
        <button className={style.btn} onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}
