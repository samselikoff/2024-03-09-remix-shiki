import { useLoaderData } from "@remix-run/react";
import { codeToHtml } from "shiki";

const inputCode = `
function Page() {
  let { user } = useLoaderData<typeof loader>()

  return <p>Hello {user.name}!</p>
}
`;

export async function loader() {
  const html = await codeToHtml(inputCode, {
    lang: "tsx",
    theme: "dracula",
  });

  return { html };
}

export default function Index() {
  const { html } = useLoaderData<typeof loader>();

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
