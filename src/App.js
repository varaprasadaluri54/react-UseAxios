import { useAxios } from "use-axios-client";
import "./styles.css";

export default function App() {
  const { data, error, loading } = useAxios({
    url: "https://jsonplaceholder.typicode.com/posts/1"
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  return (
    <div className="App">
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
