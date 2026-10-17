const getEnvVar = (key: string): string => {
    const value = import.meta.env[key];
    if (value === undefined) {
        throw new Error(`Env variable ${key} is required`);
    }

    return value;
};

export const STORAGE_KEY = getEnvVar("VITE_STORAGE_KEY") || "manga-reader";

// export const NUMBER = Number(getEnvVar("VITE_NUMBER"));
// export const BOOLEAN = getEnvVar("VITE_BOOLEAN") === "true";

// if (isNaN(NUMBER)) {
//     throw new Error("VITE_NUMBER must be a valid number");
// }
