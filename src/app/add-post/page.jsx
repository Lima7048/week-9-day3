import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SubmitButton from "../components/SubmitButton";

export default function Post() {
  async function AddPost(formData) {
    "use server";

    const name = formData.get("name");
    const comment = formData.get("comment");
    const data =
      await sql`INSERT INTO socialnetwork (name,comment) VALUES (${name},${comment})`;

    revalidatePath("/add-post");
    redirect("/feed");
  }

  return (
    <div>
      <form action={AddPost}>
        <label className="m-1">Name</label>
        <input name="Name" placeholder="Name" />

        <label className="">Comment</label>
        <input name="Type here" placeholder="Type Comment" />
        <SubmitButton />
      </form>
    </div>
  );
}
