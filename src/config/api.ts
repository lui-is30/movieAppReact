export const API_KEY=import.meta.env.VITE_API_KEY;

export const OPTS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${process.env.API_KEY}`
        Authorization: `Bearer ${API_KEY}`
    },
}