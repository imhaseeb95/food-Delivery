import axios from "axios";
import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./userscard.css";

function Userscard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/getUsers")
      .then((res) => setUsers(res.data.result))
      .catch((err) => console.log(err));
  }, [users]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/user/deleteUsers/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setTimeout(() => {
            setUsers((prev) => [...prev]);
          }, 100);
        }
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      console.log(users);
    }, 2000);
  };

  return (
    <>
      <div>
        {users.map((items) => {
          return (
            // <table>
            //   <tr>
            //     <td>
            //       <span>{items.firstName}</span>
            //       <span>{items.lastName}</span>
            //     </td>
            //     <td>
            //       <strong>{items.role}</strong>
            //     </td>
            //     <td>
            //       <strong>{items.email}</strong>
            //     </td>
            //     <td>
            //       <strong>{items.contact}</strong>
            //     </td>
            //     <td>
            //       <RiDeleteBin6Line onClick={() => handleDelete(items._id)} />
            //     </td>
            //   </tr>
            // </table>
            <div key={items._id} className="userscard-container">
              <div className="user-name">
                <span>{items.firstName}</span>&nbsp;
                <span>{items.lastName}</span>
              </div>
              <div className="role">
                <strong>{items.role}</strong>
              </div>
              <div className="user-email">
                <strong>{items.email}</strong>
              </div>
              <div className="user-conatact">
                <strong>{items.contact}</strong>
              </div>
              <div className="user-delete">
                <RiDeleteBin6Line onClick={() => handleDelete(items._id)} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Userscard;
