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
      <h2 className="m-24 p-2  text-5xl font-bold text-pretty text-center ">
        Welcome to the Butterfly Social Feed
      </h2>

      <ul className=" font-sans mx-12 flex flex-col-reverse justify-between">
        {data.map((Post) => (
          <li key={Post.id}>
            <Link
              href={`/Post/${Post.id}`}
              className=" bg-cyan-100 rounded-sm p-1 container text-center   "
            >
              {" "}
              Click here to see the post
            </Link>
            <p className=" bg-indigo-500 bg-opacity-30 border rounded-md p-4 overflow-scroll mx-2.5 shadow-md text-center ">
              <p className="text-right">{Post.id}</p>
              <p className="   uppercase flex font-bold bg-pink-200 rounded-sm underline text-4xl  ">
                🦋 {Post.name}✿
              </p>
              <p className="bg-pink-200 bg-opacity-20 italic font-thin">
                {Post.date.toLocaleDateString()}
              </p>

              <p
                className="p-1 bg-yellow-50 m-2 rounded-md text-justify
 "
              >
                {Post.comment}{" "}
              </p>
              <Like />
            </p>
          </li>
        ))}
      </ul>

      <handleDelete />
    </div>
  );
}
// {Post.date} {Post.id}
