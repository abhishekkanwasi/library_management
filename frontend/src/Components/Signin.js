import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios
      .post("http://localhost:8000/user/signin", {
        email,
        password,
      })
      .catch((err) => console.log(err));

    if (res && res.data.token) {
      localStorage.setItem("token", res.data.token);
      navigate("/user"); 
    }
  };

  return (
    <div style={{ position: "relative", opacity: "0.9" }}>
      <img
        src="https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?cs=srgb&dl=pexels-atlasworld-1674049.jpg&fm=jpg"
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        alt="Background"
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          margin: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <div style={{ color: "white" }}>Sign In</div>
        </div>
        <div
          className="mb-3"
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
          }}
        >
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            id="emailHelp"
            className="form-text"
            style={{ color: "#000814" }}
          >
            We'll never share your email with anyone else.
          </div>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ marginTop: "5px" }}>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitHandler}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
