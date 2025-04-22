import React, { useState, useEffect } from "react";

type LeaderboardEntry = {
  name: string;
  score: number;
};

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("leaderboard");
    if (storedData) {
      try {
        const data: unknown = JSON.parse(storedData);
        if (Array.isArray(data)) {
          const validData = data.filter(
            (entry): entry is LeaderboardEntry =>
              typeof entry.name === "string" && typeof entry.score === "number"
          );
          setLeaderboard(validData);
        }
      } catch (error) {
        console.error("Failed to parse leaderboard data:", error);
      }
    }
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Leaderboard</h2>
      <div className="space-y-2">
        {leaderboard.map((entry, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-gray-700">{entry.name}</span>
            <span className="text-gray-700">{entry.score} points</span>
          </div>
        ))}
      </div>
    </div>
  );
}
