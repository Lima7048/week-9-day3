import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export default async function Post() {
  "use server";
  const data = (await sql`SELECT * from socialnetwork `).rows;

  revalidatePath("/feed");

  return (
    <div>
      <h2 className="">Welcome to the Butterfly Social Feed</h2>
      <ul>
        {data.map((Post) => (
          <li key={Post.id}>
            <a href={`/feed/${Post.id}`}>
              {Post.id},{Post.name},{Post.comment}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
