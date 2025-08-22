const API_URL = import.meta.env.VITE_BASE_URL;
export const getUserData = async () => {
    try {
        const response = await fetch(`${API_URL}user_vi`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}