import { useEffect, useState } from "react"
import { github_users } from "../apis/apis"
import axios from "axios"
import useGetQR from "./useGetQR"

const useGetUsers = () => {
	const [user, setUser] = useState()
	const [valid, setValid] = useState()
	const [searchValue, setSearchValue] = useState()
	const [code, setCode] = useState()
	const [showInfo, setShowInfo] = useState(false)

	const getCode = () => {
		if (user !== undefined) {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			setCode(useGetQR(user.html_url))
		} else {
			setCode("")
		}
	}

	useEffect(getCode, [user])
	useEffect(getCode, [user, valid])
	useEffect(() => {
		if (searchValue === "") {
			setValid(true)
			setUser(undefined)
		}
	}, [searchValue])

	const lookForUser = (username) => {
		const api = github_users + "/" + username
		async function getUser() {
			const response = await axios(api)
				.then((response) => {
					setUser(response.data)
					if (response.request.status === 200) {
						setValid(true)
					} else if (response === undefined) {
						setValid(false)
					}
				})
				.catch((response) => {
					setValid(false)
				})
			return response
		}
		getUser()
	}

	return {
		user,
		setUser,
		valid,
		setValid,
		lookForUser,
		searchValue,
		setSearchValue,
		code,
		getCode,
		showInfo,
		setShowInfo,
	}
}

export default useGetUsers
