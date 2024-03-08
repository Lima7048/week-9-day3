import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

// export default async function handleDelete() {
//   function handleDelete(Post) {
//     //sql
//     console.log("meow");
//     await sql`DELETE FROM socialnetwork WHERE id=${Post.id}`
//   }

//   return (
//     <div className="">
//       <button onClick={() => handleDelete(Post.id)}>Delete</button>
//     </div>
//   );
// }

/* <div>
  <button onClick={() => handleDelete()}>Delete</button>
</div>;
export default async function handleDelete(Post) {
  await sql`DELETE FROM socialnetwork WHERE id=${Post.id}`;
} */
