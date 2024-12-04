import Navbar from "./NavBar";

function Layout({children}) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
export default Layout;