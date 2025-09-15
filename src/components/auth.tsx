"use client";

import Avatar from "boring-avatars";
import { useEffect, useState } from "react";

export default function Auth() {
  const [user, setUser] = useState<{
    name: string;
  } | null>(null);
  useEffect(() => {
    (async () => {
      const result = await fetch("http://localhost:3000/api/getUser");
      const data = await result.json();
      setUser(data);
    })();
  }, []);

  return (
    <Avatar
      size={32}
      name={user?.name ?? "Guest"}
      variant="beam"
      colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
    />
  );
}
