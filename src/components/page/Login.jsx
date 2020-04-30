import React, { useState, useEffect } from "react";
import Logo from "../core/Logo";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);

  const handleHidden = () => setHidden(!hidden);

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
                      type={hidden ? "password" : "text"}
                      className="formcontrol col-12"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="row my-4">
                    <label
                      for="password"
                      className="fontcolor font-weight-bold"
                      onChange={(e) => setPassword(e.target.value)}
                    >
                      Password
                    </label>

                    <Input
                      placeholder="Password"
                      type={hidden ? "password" : "text"}
                      className="formcontrol col-12"
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
                    <button
                      type="button"
                      className="button col-12 font-weight-bold"
                    >
                      Login
                    </button>
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
