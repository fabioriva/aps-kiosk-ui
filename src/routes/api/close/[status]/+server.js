import { PUBLIC_API } from "$env/static/public";
import { json } from "@sveltejs/kit";
import { URL } from 'url';

export async function GET({ request }) {
  // const param = url.searchParams.get('param');
  // console.log(request, param)
  const myURL = new URL(request.url)
  const pathname = myURL.pathname;
  console.log(pathname, pathname.split('/'), typeof pathname.split('/').pop())
  const url_ = PUBLIC_API + "/close/" + parseInt(pathname.split('/').pop());
  console.log(url_)
  const res = await fetch(url_);
  const json_ = await res.json();
  console.log(json_);
  return json(json_);
}
