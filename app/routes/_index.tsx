import type { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{ title: 'Remix + tailwind App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const loader = () => {
  return { date: new Date().toJSON() };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }} className="flex flex-col gap-3 items-center">
      <h1 className="text-3xl font-bold text-blue-500 underline">Welcome to Remix + tailwind</h1>
      <p>current time: {data.date}</p>
      <ul>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer" className="underline">
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer" className="underline">
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer" className="underline">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
