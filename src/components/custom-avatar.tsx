import Avatar from "boring-avatars";
import { use } from "react";

export default function CustomAvatar({
  result,
}: {
  result: ReturnType<typeof fetch>;
}) {
  const data = use(result);
  const res = use(data.json());

  return (
    <Avatar
      size={32}
      name={res.name}
      variant="beam"
      colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
    />
  );
}
