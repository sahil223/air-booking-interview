import React, { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users
  useEffect(() => {
    fetch("http://localhost:9000/all-users")
      .then((res) => res.json())
      .then((data) => setUsers(data.data || []));
  }, []);

  // Change role
  const changeRole = async (id, role) => {
    await fetch(`http://localhost:9000/update-role/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role }),
    });

    setUsers(
      users.map((u) =>
        u._id === id ? { ...u, utype: role } : u
      )
    );

    alert(`User role updated to ${role}`);
  };

  return (
    <div>
      {/* Breadcrumb Section */}
      <section className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="breadcrumb-content text-center">
                <h2 className="title">Manage Users</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Flights</a>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Manage Users
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Users Table */}
      <div style={{ padding: "20px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <thead style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
            <tr>
              <th style={{ padding: "12px" }}>Name</th>
              <th style={{ padding: "12px" }}>Email</th>
              <th style={{ padding: "12px" }}>Current Role</th>
              <th style={{ padding: "12px" }}>Change Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px" }}>{u.Name}</td>
                <td style={{ padding: "12px" }}>{u.Email}</td>
                <td style={{ padding: "12px", fontWeight: "500" }}>
                  {u.utype === "admin" ? (
                    <span style={{ color: "green" }}>Admin</span>
                  ) : (
                    <span style={{ color: "blue" }}>User</span>
                  )}
                </td>
                <td style={{ padding: "12px" }}>
                  {u.utype === "user" ? (
                    <button
                      onClick={() => changeRole(u._id, "admin")}
                      style={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        padding: "8px 14px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "500",
                        transition: "0.3s",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#45a049")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#4CAF50")
                      }
                    >
                      Make Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => changeRole(u._id, "user")}
                      style={{
                        backgroundColor: "#f44336",
                        color: "white",
                        padding: "8px 14px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "500",
                        transition: "0.3s",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#da190b")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#f44336")
                      }
                    >
                      Make User
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
