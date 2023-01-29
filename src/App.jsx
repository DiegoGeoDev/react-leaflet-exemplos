import {
	createBrowserRouter,
	createRoutesFromElements,
	Link,
	Outlet,
	Route,
	RouterProvider,
} from 'react-router-dom';

import { Ex1 } from './pages/Ex1';
import { Ex2 } from './pages/Ex2';
import { Ex3 } from './pages/Ex3';
import { Ex4 } from './pages/Ex4';
import { Ex5 } from './pages/Ex5';
import { Ex6 } from './pages/Ex6';

import './App.css';

function Root() {
	return (
		<>
			<div className="nav">
				<Link to="/">Ex1</Link>
				<Link to="/ex2">Ex2</Link>
				<Link to="/ex3">Ex3</Link>
				<Link to="/ex4">Ex4</Link>
				<Link to="/ex5">Ex5</Link>
				<Link to="/ex6">Ex6</Link>
			</div>
			<div className="content">
				<Outlet />
			</div>
		</>
	);
}

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Ex1 />} />
				<Route path="/ex2" element={<Ex2 />} />
				<Route path="/ex3" element={<Ex3 />} />
				<Route path="/ex4" element={<Ex4 />} />
				<Route path="/ex5" element={<Ex5 />} />
				<Route path="/ex6" element={<Ex6 />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
