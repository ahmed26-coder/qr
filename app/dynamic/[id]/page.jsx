"use client"
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function RedirectPage() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      router.push('/target');
    }
  }, [id]);

  return <p>Your transfer is in progress...</p>;
}
