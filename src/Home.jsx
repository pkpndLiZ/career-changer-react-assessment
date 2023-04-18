import Layout from "./Layout";
import { useState } from "react";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [employees, setEmployees] = useState();
  const [sector, setSector] = useState();

  const displeySector = () => {
    if (sector === "admin") {
      return <Admin />;
    } else if (sector === "user") {
      return <User />;
    } else {
      return <div></div>;
    }
  };
  // console.log(sector);
  return (
    <Layout>
      <div>
        <h1>
          Generation Thailand <br /> React - Assessment
        </h1>
        <div>
          <button onClick={() => setSector("user")}>User Home Sector</button>
          <button onClick={() => setSector("admin")}>Admin Home Sector</button>
        </div>
      </div>
      {displeySector()}
    </Layout>
  );
};

const User = () => {
  return (
    <div>
      <table border="1">
        <tr>
          <td>Name</td>
          <td>Last Name</td>
          <td>Position</td>
        </tr>
        {mockEmployees.map((employee) => (
          <tr>
            <td>{employee.name}</td>
            <td>{employee.lastname}</td>
            <td>{employee.position}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

const Admin = () => {
  return (
    <div>
      <div class="inputForm">
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Position" />
        </form>
        <button>Save</button>
      </div>
      <table border="1">
        <tr>
          <td>Name</td>
          <td>Last Name</td>
          <td>Position</td>
          <td>Action</td>
        </tr>
        {mockEmployees.map((employee) => (
          <tr>
            <td>{employee.name}</td>
            <td>{employee.lastname}</td>
            <td>{employee.position}</td>
            <td>Delete</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Home;
