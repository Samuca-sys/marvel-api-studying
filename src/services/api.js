import axios from 'axios';
import md5 from 'md5';

const ts = Number(new Date());

const apikey = process.env.REACT_APP_API_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_API_PRIVATE_KEY;

// const hash = md5(ts + privateKey + apikey);
const hash = apikey && privateKey ? md5(ts + privateKey + apikey) : '';

export const authKey = `&ts=${ts}&apikey=${apikey}&hash=${hash}`;

export const api = axios.create({
	baseURL: 'http://gateway.marvel.com/v1/public/',
	// ,
	// params: {
	// 	apikey,
	// 	hash,
	// 	ts,
	// },
});
