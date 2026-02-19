const required = (value, name) => {
    if(value === undefined || value === null || value === "") {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
} 


const env = {
    API_BASE_URL: required(import.meta.env.VITE_API_BASE_URL, "VITE_API_BASE_URL"),
    APP_NAME: import.meta.env.VITE_APP_NAME || "My App",
    NODE_ENV: import.meta.env.MODE,
    IS_PROD: import.meta.env.PROD,
    IS_DEV: import.meta.env.DEV,
}

export default env;

