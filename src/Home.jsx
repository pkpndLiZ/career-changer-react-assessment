import Layout from "./Layout";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
  const [employees, setEmployees] = useState([]);
  const [sector, setSector] = useState();

  useEffect(() => setEmployees(mockEmployees), []);

  const displeySector = () => {
    if (sector === "admin") {
      return <Admin employees={employees} setEmployees={setEmployees} />;
    } else if (sector === "user") {
      return <User employees={employees} />;
    } else {
      return <div></div>;
    }
  };

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

const User = (props) => {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Last Name</td>
            <td>Position</td>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Admin = (props) => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (registerData) => {
    console.log(registerData);
    props.setEmployees((currentEmp) => {
      return [
        ...currentEmp,
        {
          id: currentEmp.length,
          name: registerData.name,
          lastname: registerData.lastname,
          position: registerData.position,
        },
      ];
    });
    setValue("name", "");
    setValue("lastname", "");
    setValue("position", "");

    console.log("employees list: ", props.employees);
  };

  const handleRemoveEmployee = (empId) => {
    props.setEmployees(props.employees.filter((emp) => emp.id !== empId));
  };

  return (
    <div>
      <div className="inputForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastname", { required: true })}
          />
          <input
            type="text"
            placeholder="Position"
            {...register("position", { required: true })}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Last Name</td>
            <td>Position</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
              <td>
                <button
                  id="deleteBtn"
                  onClick={() => handleRemoveEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
