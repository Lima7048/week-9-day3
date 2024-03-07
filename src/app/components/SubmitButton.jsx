"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className=" m-1 text-slate-700 text-2xl bg-opacity-50 bg-green-100 rounded"
    >
      {pending ? "Adding post..." : "Posted"}
    </button>
  );
}
