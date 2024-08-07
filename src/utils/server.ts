import { SERVER_ENDPOINT } from "@/constants/server";

const request = async (url: string, init: RequestInit) => {
    const response = await fetch(url, init);
    return response;
};

export const requestToUser  = (    
    path: string,
    init: RequestInit,
    idToken?: string) => {
        const url = `${SERVER_ENDPOINT}/user` + (path ? `/${path}` : '');
        const headers = {
            Authorization: `Bearer ${idToken}`,
            ...init.headers,
        };
        return request(url, { ...init, headers });
    }

export const requestToGroup = (
    path: string,
    init: RequestInit,
    idToken?: string) => {
        const url = `${SERVER_ENDPOINT}/group` + (path ? `/${path}` : '');
        const headers = {
            Authorization: `Bearer ${idToken}`,
            ...init.headers,
        };
        return request(url, { ...init, headers });
    }

export const requestToNoti = (
    path: string,
    init: RequestInit,
    idToken?: string) => {
        const url = `${SERVER_ENDPOINT}/notification` + (path ? `/${path}` : '');
        const headers = {
            Authorization: `Bearer ${idToken}`,
            ...init.headers,
        };
        return request(url, { ...init, headers });
    }

export const jsonifyResponse = <T>(response: Response): Promise<T> => {
    return response.json();
}