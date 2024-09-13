import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios
      .post("http://localhost:8000/user/signup", {
        email,
        password,
        name,
        role,
      })
      .catch((err) => console.log(err));

    if (res) {
      localStorage.setItem("token", res.data.token);
      console.log(localStorage.getItem("token"));
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
          <div style={{ color: "white" }}>Sign up</div>
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
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="exampleInputRole1" className="form-label">
            Role
          </label>
          <select
            className="form-select"
            id="exampleInputRole1"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
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
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
