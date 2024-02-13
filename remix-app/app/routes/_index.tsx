import {json, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {prisma} from '~/db.server';

export const meta: MetaFunction = () => {
  return [
    {title: 'New Remix App'},
    {name: 'description', content: 'Welcome to Remix!'},
  ];
};

export async function loader() {
  const data = await prisma.person.findMany({take: 10});
  return json({
    data,
  });
}

export default function Index() {
  const {data: people} = useLoaderData<typeof loader>();
  return (
    <div className="m-2">
      <h1 className="text-2xl font-bold"> People </h1>
      <div className="flex flex-col">
        {people.map((item) => (
          <div className="m-2" key={item.businessentityid}>{item.firstname} {item.lastname}</div>
        ))}
      </div>
    </div>
  );
}
