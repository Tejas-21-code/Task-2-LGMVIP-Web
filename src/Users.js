import "./Users.css";

function Users(props) {
  return (
    <div className="user-grid">
      {props.data.map((user) => {
        return (
          <div className="items zoom">
            <img className="img" alt="Not Found" src={user.avatar} />
            <p>User : {user.id}</p>
            <p>
              Name : {user.first_name} {user.last_name}
            </p>
            <p>
              Email :<a href={user.email}> {user.email}</a>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
