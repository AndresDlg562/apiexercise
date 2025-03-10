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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Random Person</h1>
      <button onClick={() => fetchData()}>Fetch Data</button>
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
