import Movie from "@/app/components/Movie";

export default function MovieList({ movies }: { movies: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          imdbID={movie.imdbID}
          type={movie.Type}
          poster={movie.Poster}
        />
      ))}
    </div>
  );
}
