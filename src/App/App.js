import React, { Suspense } from "react"
import "../styles/App.css"
import Home from "../pages/Home"
import AppContext from "../contexts/AppContext"
import useGetUsers from "../hooks/useGetUsers"

const App = () => {
	const usersApi = useGetUsers()
	const LazyUserInfo = React.lazy(() => import("../pages/UserInfo"))
	return (
		<AppContext.Provider value={usersApi}>
			<div className="App">
				<Home />
				{usersApi.showInfo && usersApi.valid && usersApi.user !== undefined && (
					<Suspense fallback={null}>
						<LazyUserInfo />
					</Suspense>
				)}
			</div>
		</AppContext.Provider>
	)
}
export default App
