import React from "react";

const UserTable = ({ users = [] }) => {
  return (
    <div className="table-container mt-2">
      <table className="table is-fullwidth">
        <tr>
          <th>Avatar</th>
          <th>User Name</th>
          <th>Type</th>
          <th>Score</th>
        </tr>
        {users.map((user) => {
          const { avatar_url, login, type, score } = user;
          return (
            <tr>
              <td>
                <img
                  alt="user avatar"
                  src={avatar_url}
                  className="user-avatar"
                />
              </td>
              <td>{login}</td>
              <td>{type}</td>
              <td>{score}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default UserTable;
