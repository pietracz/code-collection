import React from "react";

export default function UserList({ users }) {
  const renderedUser = users.map((user) => {
    return (
      <tr>
        <td className="nameCell"> {user.name}</td>
        <td className="emailCell">{user.email}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{renderedUser}</tbody>
    </table>
  );
}
