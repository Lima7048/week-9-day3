import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import Like from "@/app/components/Like";
import handleDelete from "../components/DeleteButton";
import { Nunito, Nunito_Sans } from "next/font/google";

// const Nunito = Nunito_Sans({ subsets: ["latin"] });

export default async function Post() {
  "use server";
  const date = new Date();
  const data = (await sql`SELECT * from socialnetwork `).rows;

  revalidatePath("/Post");

  return (
    <div>
      <h2
        className="m-24 p-2  text-5xl font-bold text-pretty text-center 
      "
      >
        Welcome to the Butterfly Social Feed
      </h2>
      <ul className=" font-sans p-9">
        {data.map((Post) => (
          <li key={Post.id}>
            <Link href={`/Post/${Post.id}`}> Click here to see posts</Link>
            <p className="">{Post.name}</p>
            <p className="">{Post.date.toLocaleDateString()}</p>
            <p className="">{Post.comment}</p>
            <Like />
          </li>
        ))}
      </ul>
      <handleDelete />
    </div>
  );
}
// {Post.date} {Post.id}
