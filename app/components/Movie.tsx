import Image from "next/image";
import Card from "@/app/components/Card";

type MovieProps = {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
};

export default function Movie({
  title,
  year,
  imdbID,
  type,
  poster,
}: MovieProps) {
  return (
    <Card>
      <Image
        src={poster !== "N/A" ? poster : "/placeholder.png"}
        alt={`${title} Poster`}
        width={300}
        height={450}
        className="w-full h-lvh object-cover mb-4"
      />

      <h2>{title}</h2>
      <p>{year}</p>
      <p>{type}</p>
    </Card>
  );
}
