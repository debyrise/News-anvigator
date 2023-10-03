import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Homepage";
import DetailedPage from "../pages/Detailpages";
import Search from "../pages/Search";

const Index = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},

	{
		path: "detailed/:i",
		element: <DetailedPage />,
	},
    {
        path: "Search",
        element: <Search  />
    }
]);

export default Index;