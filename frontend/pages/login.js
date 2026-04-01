import { useState } from 'react';
import { useRouter } from 'next/router';
import SignupAnimation from '@/components/SignupAnimation';

const Login = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    const username = name.trim() || localStorage.getItem('bento_username') || 'demo-user';
    localStorage.setItem('bento_username', username);
    router.push(`/${username}`);
  };

  return (
    <div className="flex lg:flex-row p-7 sm:p-16 max-w-[1728px] w-full min-h-screen mx-auto">
      <div className="flex max-w-[675px] flex-1 flex-col items-center justify-center ">
        <form onSubmit={onSubmit} className="w-full max-w-md space-y-4">
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <input className="w-full border rounded-lg px-4 py-3" placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)} />
          <button className="w-full bg-black text-white rounded-lg py-3">Sign in</button>
        </form>
      </div>
      <div className="hidden lg:flex flex-1 z-10 max-w-[675px] flex-col items-center justify-center w-full h-full">
        <SignupAnimation />
      </div>
    </div>
  );
};

export default Login;
