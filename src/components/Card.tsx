import InfoIcon from "./InfoIcon";
import { Person } from "../types/person";
import Image from "next/image";

interface CardProps {
    error: string | null;
    loading: boolean;
    person: Person;
    showInfo: (message: string, info: string) => void;
}

const Card = ({ error, loading, person, showInfo }: CardProps) => {
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (person) {
        return (
            <div className="p-4 border rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                    <Image
                     src={person.picture}
                     alt={person.name}
                     className="rounded-full"
                     width={100}
                     height={100} 
                    />
                </div>

                <h2 className="text-xl font-semibold">{person.name}</h2>

                
                <div className="flex gap-4 mt-4 justify-between">
                    <InfoIcon 
                        iconSrc="/email.svg"
                        message="Email"
                        info={person.email}
                        showInfo={showInfo}
                    />
                    <InfoIcon 
                        iconSrc="/phone.svg"
                        message="Phone"
                        info={person.phone}
                        showInfo={showInfo}
                    />
                    <InfoIcon 
                        iconSrc="/location.svg"
                        message="Address"
                        info={person.address}
                        showInfo={showInfo}
                    />
                    <InfoIcon 
                        iconSrc="/calendar.svg"
                        message="Birthday"
                        info={person.dob}
                        showInfo={showInfo}
                    />
                </div>
            </div>
        );
    }
};

export default Card;