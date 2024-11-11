'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const RedirectPage = ({ params }) => {
  const { shortcode } = params;
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLongUrl = async () => {
      const response = await fetch(`/api/get-long-url?shortcode=${shortcode}`);

      if (response.ok) {
        const { longUrl } = await response.json();
        router.push(longUrl);
      } else {
        alert('Shortcode not found');
        router.push('/');
      }
      setLoading(false);
    };

    fetchLongUrl();
  }, [shortcode, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return null;
};

export default RedirectPage;