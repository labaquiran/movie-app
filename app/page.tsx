import SearchBar from "@/app/components/SearchBar";
import Movie from "@/app/components/Movie";

export default async function Home(props: {
  searchParams?: Promise<{
    s?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  console.log("Search params:", searchParams);
  const query = searchParams?.s || "";
  const currentPage = Number(searchParams?.page) || 1;

  const { Search } = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${encodeURIComponent(query)}&page=${currentPage}`,
  ).then((res) => res.json());

  console.log(Search);

  return (
    <main>
      <h1 className="text-3xl text-center py-4">Next.js Movie App</h1>
      <SearchBar />

      {Search && Search.length > 0 ? (
        Search.map((movie: any) => (
          <Movie key={movie.imdbID} title={movie.Title} />
        ))
      ) : (
        <p className="text-center">No movies found.</p>
      )}
    </main>
  );
}
