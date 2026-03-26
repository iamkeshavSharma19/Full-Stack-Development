function Login() {
  return (
    <section className="h-screen bg-gray-100 grid place-items-center">
      <form className="p-10 bg-white shadow-lg rounded">
        <h2 className="font-semibold text-xl mb-3">Login Form</h2>
        <div className="flex flex-col mb-5">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
            className="border px-4 py-1 border-gray-300 rounded focus:outline focus:outline-blue-500"
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="password">Email</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="border px-4 py-1 border-gray-300 rounded focus:outline focus:outline-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold rounded w-full py-1 cursor-pointer hover:bg-blue-900"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
