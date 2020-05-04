import React, { useState, useEffect } from "react";
import Logo from "../core/Logo";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "../core/Button";
import { apiAuth } from "../../api/auth";
import qs from "qs";
import { navigate } from "@reach/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);

  const handleHidden = () => setHidden(!hidden);

  async function handleLogin() {
    const temp = {
      grant_type: "password",
      username: username,
      password: password,
    };

    try {
      let res = await apiAuth(qs.stringify(temp));
      if (res) {
        localStorage.setItem("data", JSON.stringify(res.data));
        alert("Please wait");
        setTimeout(() => {
          navigate("/homepage");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 ">
            <div className="card my-5 mx-4">
              <div className="card-body">
                <div className="my-5">
                  <Logo />
                </div>
                <div className="col-12">
                  <div className="row">
                    <label
                      for="usernameID"
                      className="fontcolor font-weight-bold"
                    >
                      Username
                    </label>
                    <Input
                      placeholder="Username"
                      type="text"
                      className="formcontrol col-12"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="row my-4">
                    <label
                      for="password"
                      className="fontcolor font-weight-bold"
                    >
                      Password
                    </label>
                    <Input
                      placeholder="Password"
                      type={hidden ? "password" : "text"}
                      className="formcontrol col-12"
                      onChange={(e) => setPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          {hidden ? (
                            <VisibilityOffIcon
                              display="flex"
                              onClick={() => handleHidden()}
                            />
                          ) : (
                            <VisibilityIcon onClick={() => handleHidden()} />
                          )}
                        </InputAdornment>
                      }
                    />
                  </div>
                  <div className="my-5">
                    <Button text="Login" onClick={() => handleLogin()} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
