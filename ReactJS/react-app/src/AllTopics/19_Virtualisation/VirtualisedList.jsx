import { useEffect, useState } from "react";
import { Virtuoso } from "react-virtuoso";



const VirtualisedList = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    let resp = await fetch("https://dummyjson.com/users?/limit=1000");
    let data = await resp.json();
    console.log(data);
    setUsers(data.users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-5 text-center">
      <h1 className="my-10 font-bold text-3xl text-center">
        Learn Virtualisation
      </h1>

      {users.length > 0 ? (
        <>
          {/* <section>
            {users.map((user) => {
              return (
                <div key={user.id}>
                  <h3>{user.firstName}</h3>
                  <button>Hire me</button>
                </div>
              );
            })}
          </section> */}
          {/* performing Virtualisation */}
          <Virtuoso
            style={{
              height: "400px",
              width: "400px",
              border: "1px solid black",
              margin: "0 auto",
            }}
            totalCount={users.length}
            itemContent={(index) => {
              console.log(index);
              let user = users[index];
              return (
                <div
                  style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h1>{user.firstName}</h1>
                  <button>Hire Me</button>
                </div>
              );
            }}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VirtualisedList;

