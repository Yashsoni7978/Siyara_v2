// app/blog/page.jsx
// This route is permanently redirected → /insights via next.config.js
// This file prevents Next.js from generating a duplicate static /blog page.
import { redirect } from 'next/navigation';

export const metadata = {
  robots: 'noindex, nofollow',
};

export default function BlogRedirectPage() {
  redirect('/insights');
}
