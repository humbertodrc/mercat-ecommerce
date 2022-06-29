import axios from "axios";

const apiProducts = axios.create({
	baseURL: "https://amiiboapi.com/api/amiibo/",
});

export default apiProducts;
