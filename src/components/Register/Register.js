import { useState } from "react";

function Register({ onRouteChange, loadUser }) {
  // state for registration
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onNameChange = function (event) {
    setRegisterForm((prevRegisterForm) => {
      return { ...prevRegisterForm, name: event.target.value };
    });
  };

  const onEmailChange = function (event) {
    setRegisterForm((prevRegisterForm) => {
      return { ...prevRegisterForm, email: event.target.value };
    });
  };

  const onPasswordChange = function (event) {
    setRegisterForm((prevRegisterForm) => {
      return { ...prevRegisterForm, password: event.target.value };
    });
  };

  const onSubmitRegister = function () {
    fetch("http://localhost:8000/register", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: registerForm.email,
        password: registerForm.password,
        name: registerForm.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          loadUser(user);
          onRouteChange("home");
        }
      });
  };

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                onChange={(event) => onNameChange(event)}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                onChange={(event) => onEmailChange(event)}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                onChange={(event) => onPasswordChange(event)}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
              onClick={onSubmitRegister}
            />
          </div>
        </div>
      </main>
    </article>
  );
}

export default Register;
