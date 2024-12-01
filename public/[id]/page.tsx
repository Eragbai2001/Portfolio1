// pages/posts/[id].tsx

import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query; // 'id' is extracted from the URL path

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Post ID: {id}</h1>
      <p className="mt-4">This is the content for post {id}.</p>
    </div>
  );
}
