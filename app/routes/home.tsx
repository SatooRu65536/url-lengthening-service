import type { Route } from './+types/home';
import TopPage from '~/pages/TopPage';

export const meta: Route.MetaFunction = () => [
  { title: 'URL Lengthening Service' },
  { name: 'description', content: 'URL Lengthening Service' },
];

export default function Home() {
  return <TopPage />;
}
