'use client';

import { useState } from "react";
import Card from "@/components/Card";
import { useFetchPerson } from "@/app/hooks/getPerson";


export default function Home() {
  const { people, error, loading, fetchData } = useFetchPerson();
  const [infoTitle, setInfoTitle] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  const showInfo = (message: string, info: string) => {
    setInfoTitle(message);
    setInfoMessage(info);
  }

  return (
    <div className="grid items-center justify-items-center min-h-screen p-20 gap-4">
      <h1 className="text-4xl font-bold">
        Random Person
      </h1>
      <button onClick={() => fetchData()} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Fetch Data
      </button>
      <h1>{infoTitle}</h1>
      <h1>{infoMessage}</h1>

      <div className="flex gap-4">
        <Card
          error={error}
          loading={loading}
          person={people[people.length - 1]}
          showInfo={showInfo}
        />
      </div>
    </div>
  );
}
