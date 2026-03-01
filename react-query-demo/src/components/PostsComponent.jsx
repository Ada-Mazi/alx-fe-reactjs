import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
};

const PostsComponent = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000,
  });

  const handleRefetch = () => {
    queryClient.invalidateQueries(["posts"]);
  };

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ maxWidth: "700px", margin: "30px auto", fontFamily: "Arial" }}>
      <h2>Posts (React Query Demo)</h2>

      {isFetching && <p style={{ color: "blue" }}>Refreshing data...</p>}

      <button
        onClick={handleRefetch}
        style={{ marginBottom: "20px", padding: "8px 16px", cursor: "pointer" }}
      >
        🔄 Refetch Posts
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "10px",
              background: "#f9f9f9",
            }}
          >
            <h4 style={{ margin: "0 0 5px", color: "#333" }}>
              #{post.id} {post.title}
            </h4>
            <p style={{ margin: 0, color: "#555" }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;