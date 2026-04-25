import { useEffect, useState } from "react";
import { getUsers } from "../services/UserService";
import DataTable from "../components/DataTable";

export default function User() {
  const [users, setUsers] = useState([]);
  const [editData, setEditData] = useState(null);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    console.log("Delete clicked ", id);
  };
  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role_id", label: "Role" },
    { key: "coaching_id", label: "Coaching" },
  ];

  return (
    <div>
      <h2>User List</h2>
      <DataTable
        columns={columns}
        data={users}
        onEdit={setEditData}
        onDelete={handleDelete}
      />
    </div>
  );
}
