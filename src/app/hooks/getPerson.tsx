import { useState, useEffect } from "react";
import {  PersonResponse, PersonResult   } from "@/types/peopleresponse";
import { Person } from "@/types/person";
import axios from "axios";


export const useFetchPerson = () => {
    const [people, setPeople] = useState<Person[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get<PersonResult>("https://randomuser.me/api/");
          const data = response.data.results[0];
          const newPerson: Person = {
            name: data.name.title + " " + data.name.first + " " + data.name.last,
            email: data.email,
            dob: data.dob.date,
            address: data.location.street.number + " " + data.location.street.name,
            phone: data.phone,
            picture: data.picture.medium,
            password: data.login.password
          };
    
          setPeople(people.concat(newPerson));
        }
        catch (error) {
          setError(error instanceof Error ? error.message : "An error occurred");
        }
        finally {
          setLoading(false);
      }
    
    }
    
    useEffect(() => {
    fetchData
    }, []);

    return { people, loading, error, fetchData };
};