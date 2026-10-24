import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <Hero />
      <CategoryGrid />
    </div>
  );
}
