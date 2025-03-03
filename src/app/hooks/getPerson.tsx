import { useState } from "react";
import { Person } from "@/types/person";

export const useFetchPerson = () => {
    const [person, setPerson] = useState<Person | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>("");

    const fetchPerson = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json();
            setPerson(data.results[0]);
        } catch (error) {
            setError(error instanceof Error ? error.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return { person, loading, error, fetchPerson };
};

