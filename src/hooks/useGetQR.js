import { qr_generator } from "../apis/apis"

const useGetQR = (link) => {
	const code = qr_generator + link
	return code
}

export default useGetQR
