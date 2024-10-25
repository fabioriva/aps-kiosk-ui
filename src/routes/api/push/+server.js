import { PUBLIC_API } from "$env/static/public";
import { json } from "@sveltejs/kit";

export async function GET({ request }) {
  const url = PUBLIC_API + "/press";
  const res = await fetch(url);
  const json_ = await res.json();
  console.log(json_);
  return json(json_);
}
