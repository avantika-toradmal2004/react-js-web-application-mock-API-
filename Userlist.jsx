import React, { useEffect, useState } from "react";
import { getAll, deleteUser } from "./Service/api";
import { useNavigate } from "react-router-dom";

const Userlist = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    await getAll().then((result) => setData(result.data));
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    FetchData();
  };

  const handleUpdate = (user) => {
    navigate("/Adduser", { state: { user } });
  };

  return (
    <div>
      <h2>User List</h2>
      <table border="1" cellPadding="10" style={{ margin: "20px auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fullname}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.address}</td>
              <td>{item.password}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => handleUpdate(item)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
