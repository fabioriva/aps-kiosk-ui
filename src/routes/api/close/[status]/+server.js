import { PUBLIC_API } from "$env/static/public";
import { json } from "@sveltejs/kit";
import { URL } from 'url';

export async function GET({ request }) {
  const status = new URL(request.url).pathname.split('/').pop()
  const res = await fetch(PUBLIC_API + "/close/" + parseInt(status))
  const json_ = await res.json();
  console.log(json_);
  return json(json_);
}
