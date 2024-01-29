import { useQuery } from "react-query";
import { blogPostsSchema } from "../schema/blogPostSchema";

/* 
  Analogy: Library Book Checkout System

  Imagine a library with a system for checking out books. This system keeps track of which books are checked out, who has them, and when they need to be returned.

  The `useQuery` Function: The Library Checkout System

  The `useQuery` function is like the library's checkout system. It manages the process of "checking out" data (in your case, blog posts) from a "data source" (the API).

  First Argument: Query Key - The Book's Unique Identifier

    The first argument of `useQuery`, which is a string (in your example, `'blogPosts'`), acts like a unique identifier for a specific book in the library. Just as each book in a library has a unique identifier (like an ISBN), each query in React Query needs a unique key. This key is used to:

    1. Identify and Retrieve Data: It helps React Query identify and retrieve the correct data when needed.
    2. Cache Management: It helps React Query manage caching, ensuring that data is efficiently loaded and updated.

    So, the string `'blogPosts'` is a unique identifier for your query to fetch blog posts.

  Second Argument: Query Function - The Process of Getting the Book

    The second argument of `useQuery` is a function (`fetchBlogPosts` in your example) that defines how to retrieve the data. This is like the process of finding a book in the library, checking it out, and bringing it to you. The function:

    1. Fetches Data: It contains the instructions to fetch the data from the API (like going to the right shelf, finding the book, and checking it out).
    2. Handles Response: It processes the response, ensuring you get the data in the format you need (like making sure the book is the right one and in good condition).
  
  Putting It Together

    When you call `useBlogPosts`, it uses `useQuery` to "check out" the blog posts data from your API. The query key `'blogPosts'` uniquely identifies this specific data retrieval process, and the `fetchBlogPosts` function contains the instructions for fetching and processing the data.
    Summary

    In summary, using `useQuery` in React Query is like using a library's checkout system to get a specific book. The query key is the book's unique identifier, and the query function is the process of getting the book. Together, they ensure you get the right data efficiently and effectively.
*/

async function fetchBlogPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return blogPostsSchema.parse(data); // Validate and parse data using Zod
}

export function useBlogPosts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
  });

  return { data, isLoading, error };
}
