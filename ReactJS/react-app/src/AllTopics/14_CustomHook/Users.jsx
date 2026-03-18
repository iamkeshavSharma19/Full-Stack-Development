import { useApi } from "./useApi";


const Users = () => {
  let { apiData, loading } = useApi("https://dummyjson.com/users");

  if (loading) {
    return <h1 className="text-center font-extrabold">loading...</h1>;
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">Users</h1>
    </div>
  );
};

export default Users;
