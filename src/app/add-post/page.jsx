import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SubmitButton from "../components/SubmitButton";

export default function Post() {
  async function AddPost(formData) {
    "use server";

    const name = formData.get("name");
    const comment = formData.get("comment");
    await sql`INSERT INTO socialnetwork (name,comment) VALUES (${name},${comment})`;

    revalidatePath("/add-post");
    redirect("/Post");
  }

  return (
    <div className=" flex flex-column p-0.25  m-28 bg-blue-700 bg-opacity-30 text-2xl items-center backdrop-blu place-content-center ">
      <form action={AddPost}>
        <label className="m-4">Name</label>
        <input name="name" placeholder="Name" required />

        {/* <label className="m-4 text">Date</label>
        <input name="Date" placeholder="Type date" /> */}

        <label className="m-4">Comment</label>
        <input name="comment" placeholder="Type Comment" />
        <SubmitButton />
      </form>
    </div>
  );
}
