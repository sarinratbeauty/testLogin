import React, { useState, useCallback, useEffect } from "react";
import Logo from "../core/Logo";
import Button from "../core/Button";
import { Link, navigate } from "@reach/router";

export default function Account() {
  const [data, setData] = useState();

  const fetchData = useCallback(async () => {
    if (localStorage.getItem("data")) {
      const temp = await JSON.parse(localStorage.getItem("data"));
      console.log(temp);
      setData(temp);
    } else {
      nologin();
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }
  function nologin() {
    alert("please login");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }
  return (
    <>
      {data && (
        <div className="bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6">
                <div className="card my-5 mx-4">
                  <div className="card-body">
                    <div className="my-5">
                      <Logo />
                    </div>
                    <div className="row px-5">
                      <div className="col-3 text-left">
                        <p className="font-weight-bold">UserID:</p>
                        <p className="font-weight-bold">Name:</p>
                        <p className="font-weight-bold">Branch:</p>
                        <p className="font-weight-bold">Role:</p>
                        <p className="font-weight-bold">Gender:</p>
                      </div>
                      <div className="col text-left">
                        <p>{data.userId}</p>
                        <p>{data.fullName}</p>
                        <p>{data.branchEn}</p>
                        <p>{data.roleEn}</p>
                        <p>{data.sex}</p>
                      </div>
                    </div>
                    <div className="my-5">
                      <Button text="logout" onClick={() => handleLogout()} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
