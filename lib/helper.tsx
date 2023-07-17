const HOST = "http://localhost:3000";

export const getUsers = async () => {
    try {
        const response = await fetch(`${HOST}/api/users`);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
};


export const getUser = async (userId: string) => {
    try {
        const response = await fetch(`${HOST}/api/users/${userId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error('Failed to fetch user');
    }
};


export const addUser = async (formData: {}) => {
    try {
        const Options = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`${HOST}/api/users`, Options);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error('Failed to fetch user');
    }
};



export const updateUser = async (userId: string, formData: {}) => {
    try {
        const Options = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`${HOST}/api/users/${userId}`, Options);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error('Failed to fetch user');
    }
};

export const deleteUser = async (userId: string) => {
    try {
        const Options = {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        }

        const response = await fetch(`${HOST}/api/users/${userId}`, Options);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error('Failed to fetch user');
    }
};
