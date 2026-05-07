//&Q === What is a multi page application ??
//&Ans == Multi page application is a traditional web architecture where every user interaction-like clicking a link or submitting a from-triggers a full browser refresh to load a completely new HTML page from the server.

import { createBrowserRouter } from "react-router-dom";

//~Q === Difference between SPA and MPA ? == screenshot taken

//?Q == What is client side routing ??
//?Ans == Client-side routing is when the navigation between the pages is handled by javascript in the browser.Instead of requesting a new page from the server, the javascript libraries (like react router, Vue Router) updates the url using the history API and renders the appropriate component/view without reloading the page.

//!Q == What is server side routing ?
//!Ans == Server side routing is the traditional method where the browser sends a request to the server for every new url, the server then generates and sends back a complete HTML page, causing a full browser refresh.

//~Q == What is react-router-dom ?
//~Ans == React Router DOM is a popular library for client-side routing in React Applications.It allows you to create a Single Page Application [SPA] and navigate between them without full page reloads.

//^Q == What is createBrowserRouter and BrowserRouter ??
//^createBrowserRouter: A function introduced in React v6.4 + that creates a router instance using the history API.It is the recommended way to define routes as it supports data APIs like loaders, actions and fetchers.

//^BrowserRouter == A component that renders an anchor tag and navigates (move) to a route without a full page reload.

//*Q == Difference between Link and NavLink ??
//* Link == A component that renders an anchor tag and navigates (move) to a route without a full page reload.Used in for general navigation (ex == "Read More" button or a link in a footer)

//*NavLink == Same as Link but applies an active class when it's route matches the current url.Used in Navbar or dashboard tabs.

//todo == Q.What is an Outlet ?
//todo == A component used in parent routes that acts as a placeholder where the matched child route's component gets rendered.

//Syntax
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* child routes render here inside the Outlet */}
      <Outlet />
    </div>
  );
}

//&Q == What is index prop ?
//&Ans == A boolean prop on a route that marks it as the default child route, rendered inside the parent's Outlet when no other child route matches.

//&Syntax
// const router = createBrowserRouter([
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
//   children: [
//     {
//         index: true,
//         element: <DashboardHome /> // renders path when path is exactly "/dashboard"
//     }
//   ]
// ]);

//~Q-13 to Q-38 for the React Test.
