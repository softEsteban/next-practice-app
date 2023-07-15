const HOST = process.env.SERVER_HOST;

export const getUsers = async () => {
    const response = fetch(`${HOST}/api/users`);
    const json = (await response).json();
    return json;
}