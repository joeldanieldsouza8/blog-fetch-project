import { QueryClient, QueryClientProvider } from "react-query";
import BlogPosts from "./components/BlogPosts";
import ErrorMessage from "./components/ErrorMessage";
import { useBlogPosts } from "./hooks/useBlogPosts";
import fetchingImg from "./assets/data-fetching.png";
import { BounceLoader } from "react-spinners"; // Import a spinner

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataFetchingApp />
    </QueryClientProvider>
  );
}

function DataFetchingApp() {
  const { data: posts, error, isLoading } = useBlogPosts();

  // if (isLoading) return <div>Loading...</div>;
  if (isLoading) {
    return (
      <div className="loader">
        <BounceLoader size={100} color={"#2DED2D"} loading={isLoading} />
      </div>
    );
  }
  if (error instanceof Error) return <ErrorMessage text={error.message} />;
  if (!posts) return null;

  return (
    <main>
      <img
        src={fetchingImg}
        alt="An abstract image depecting a data fetching process."
      />
      <BlogPosts posts={posts} />
    </main>
  );
}

export default App;
