'use client';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  console.log(pathname);
  console.log(pathname.split('/'));
  const productId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];
  return (
    <div>
      <h1>
        Review for {productId} of {reviewId} Not found
      </h1>
      <p>Could not find requested resources</p>
    </div>
  );
}
