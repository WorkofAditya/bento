import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const defaultProfile = {
  title: 'Welcome to my Bento',
  bio: 'Creator, builder, and storyteller.',
  links: [
    { id: '1', label: 'Portfolio', href: 'https://example.com' },
    { id: '2', label: 'GitHub', href: 'https://github.com' },
  ],
};

export default function ProfilePage() {
  const router = useRouter();
  const username = router.query.id?.[0] || 'demo-user';
  const isEdit = router.query.id?.[1] === 'edit';
  const [profile, setProfile] = useState(defaultProfile);

  useEffect(() => {
    if (!router.isReady) return;
    const raw = localStorage.getItem(`bento_profile_${username}`);
    if (raw) setProfile(JSON.parse(raw));
  }, [router.isReady, username]);

  const saveProfile = (next) => {
    setProfile(next);
    localStorage.setItem(`bento_profile_${username}`, JSON.stringify(next));
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-center">@{username}</h1>
        <p className="text-center text-gray-300 mt-2">{profile.bio}</p>
        <div className="mt-8 space-y-3">
          {profile.links.map((link) => (
            <a key={link.id} href={link.href} target="_blank" rel="noreferrer" className="block w-full bg-white text-black text-center py-3 rounded-xl font-medium">
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <Link className="px-4 py-2 rounded-lg bg-white/20" href={`/${username}${isEdit ? '' : '/edit'}`}>
            {isEdit ? 'View Mode' : 'Edit Mode'}
          </Link>
          <Link className="px-4 py-2 rounded-lg bg-white/20" href="/">Home</Link>
        </div>

        {isEdit && (
          <form
            className="mt-8 space-y-3 bg-white/10 p-4 rounded-xl"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              saveProfile({
                ...profile,
                bio: String(fd.get('bio') || ''),
                links: [
                  { id: '1', label: String(fd.get('l1') || 'Link 1'), href: String(fd.get('u1') || '#') },
                  { id: '2', label: String(fd.get('l2') || 'Link 2'), href: String(fd.get('u2') || '#') },
                ],
              });
            }}>
            <input name="bio" defaultValue={profile.bio} className="w-full text-black rounded px-3 py-2" />
            <input name="l1" defaultValue={profile.links[0]?.label} className="w-full text-black rounded px-3 py-2" />
            <input name="u1" defaultValue={profile.links[0]?.href} className="w-full text-black rounded px-3 py-2" />
            <input name="l2" defaultValue={profile.links[1]?.label} className="w-full text-black rounded px-3 py-2" />
            <input name="u2" defaultValue={profile.links[1]?.href} className="w-full text-black rounded px-3 py-2" />
            <button className="w-full bg-blue-500 rounded py-2">Save</button>
          </form>
        )}
      </div>
    </main>
  );
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { id: ['demo-user'] } },
      { params: { id: ['demo-user', 'edit'] } },
    ],
    fallback: false,
  };
}

export function getStaticProps() {
  return { props: {} };
}
