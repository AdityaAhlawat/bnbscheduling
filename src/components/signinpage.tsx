"use client";
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // Redirect to a protected page or dashboard after successful login
      // For example:
      // router.push('/dashboard');
    }
  };

  return (
    <div className="bg-[#f0f8ff] text-[#333] font-inter min-h-screen flex flex-col">
      <header className="bg-[#4da6ff] text-white py-4 px-4 shadow-lg">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/bnblogo.jpg" alt="Brainy n Bright Logo" width={50} height={50} className="w-12 h-12 rounded-full shadow-md" />
            <h1 className="text-2xl font-bold tracking-wide">Brainy n Bright</h1>
          </div>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center bg-[#f0f8ff] py-12 px-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <h2 className="mb-6 text-2xl font-bold text-[#4da6ff] text-center">Welcome to Brainy n Bright</h2>
          <p className="mb-8 text-[#6b7280] text-center">
            Please sign in using the credentials provided to you. This centralized app helps you manage tutor
            schedules with features like tutor profiles, scheduling, preferences, notifications, and pay tracking.
          </p>
          {error && <p className="mb-4 text-red-500 text-center">{error}</p>}
          <form className="space-y-6" onSubmit={handleSignIn}>
            <div>
              <label htmlFor="email" className="block text-left font-medium text-[#4b5563]">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border-[#d1d5db] bg-[#f3f4f6] px-3 py-2 text-[#4b5563] focus:border-[#4da6ff] focus:outline-none focus:ring-2 focus:ring-[#4da6ff]"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-left font-medium text-[#4b5563]">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-md border-[#d1d5db] bg-[#f3f4f6] px-3 py-2 text-[#4b5563] focus:border-[#4da6ff] focus:outline-none focus:ring-2 focus:ring-[#4da6ff]"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-full bg-[#4da6ff] px-8 py-4 text-white shadow-xl transition duration-300 transform hover:scale-105 hover:bg-[#4da6ff]"
            >
              Sign In
            </Button>
          </form>
        </div>
      </main>
      <footer className="bg-[#4da6ff] text-white py-6 px-4 mt-10 shadow-inner">
        <div className="container mx-auto text-center">
          &copy; 2024 Brainy n Bright. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
