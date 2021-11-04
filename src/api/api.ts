import axios, { AxiosPromise, AxiosRequestConfig, Method } from "axios";
import { API_BASE_URL } from "./apiBaseUrl";

axios.defaults.withCredentials = true;

interface IRequestParam extends AxiosRequestConfig {
	link: string;
	body?: object;
}

const request = <ResponseType>(
	method: Method,
	param: IRequestParam,
): AxiosPromise<ResponseType> => {
	const { link, body = {}, headers, ...args } = param;

	const requestBody: AxiosRequestConfig = {
		method,
		url: `${API_BASE_URL}${link}`,
		data: body,
		headers,
		...args,
	};
	return axios.request<ResponseType>(requestBody);
};

const API_CALL_TYPE: Method[] = [
	"get",
	"GET",
	"delete",
	"DELETE",
	"head",
	"HEAD",
	"options",
	"OPTIONS",
	"post",
	"POST",
	"put",
	"PUT",
	"patch",
	"PATCH",
	"purge",
	"PURGE",
	"link",
	"LINK",
	"unlink",
	"UNLINK",
];

type MethodsType = Record<Method, <T>(p: IRequestParam) => AxiosPromise<T>>;

const API = {} as MethodsType;

API_CALL_TYPE.forEach((method) => {
	API[method] = <ResponseBody>(param: IRequestParam) => {
		return request<ResponseBody>(method, param);
	};
});

export default API;
