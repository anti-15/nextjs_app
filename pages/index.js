import Image from 'next/image'
import Layout from '../components/Layout'
export default function Home() {
  return (
    <Layout title="Home">
      <p className='text-4xl'>Welcome to Nextjs</p>
      <p className='text-2xl mt-6'>please shom me my crazy video</p>
    </Layout>
  );
}
