import {chatApi} from "./axios";


export interface Request {
    url: string;
    method: string;
    data: object;
    headers?: object;

}

export default async function handleRequest({url, method, data, headers}: Request) {
    switch (method) {
        case 'GET':
            return await chatApi.get(url, {headers})
        case 'POST':
            return await chatApi.post(url, data, {headers})
        case 'PUT':
            return await chatApi.put(url, data, {headers})
        default:
            return Error('Method not supported')
    }
}