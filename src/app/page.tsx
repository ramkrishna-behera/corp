import Link from 'next/link';
import Hero from '@/components/hero';
import homImg from 'public/home.jpg';

export default function Home() {
  return (
      <div>
        Home Page
        <Hero imgData={homImg} imgAlt='Car Factory' title='Professional Cloud Hosting'/>
      </div>
  )
}
