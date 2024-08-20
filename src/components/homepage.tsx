import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HomePage() {
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
      <main className="flex-grow">
        <section className="bg-white py-16 px-6 shadow-sm">
          <div className="container mx-auto flex justify-center items-center flex-col text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4da6ff]">Manage Tutor Schedules with Ease</h2>
            <p className="text-lg mb-8 max-w-2xl text-gray-700">
              This website is here to manage Brainy N Bright tutors' schedules. With features like tutor profiles, scheduling, preferences, notifications, and pay tracking, the tutoring process is streamlined.
            </p>
            <Link href="/signin">
              <Button className="bg-[#4da6ff] text-white px-8 py-4 rounded-full shadow-xl transition duration-300 transform hover:scale-105 hover:bg-[#4da6ff]">
                Get Started
              </Button>
            </Link>
          </div>
        </section>
        <section className="bg-[#f0f8ff] py-8 px-6">
          <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            <FeatureCard icon={UserIcon} title="Tutor Profiles" description="Create profiles for tutors with their hourly pay rates based on different tasks they offer." />
            <FeatureCard icon={CalendarIcon} title="Scheduling" description="Tutors can input their weekly locations, and the app uses an algorithm to assign them to the nearest work areas." />
            <FeatureCard icon={ClockIcon} title="Preferences" description="Tutors can set their preferred working hours." />
            <FeatureCard icon={BellIcon} title="Notifications" description="The app automatically sends schedules to tutors via email, and tutors can also check their schedules by logging into the app." />
            <FeatureCard icon={DollarSignIcon} title="Pay Tracking" description="The app tracks and calculates pay based on tutors marking their locations on time in the app." />
            <FeatureCard icon={BookIcon} title="Resource Management" description="Tutors can access educational resources and track the materials they've used or need." />
          </div>
        </section>
      </main>
      <footer className="bg-[#4da6ff] text-white py-6 px-4 mt-10 shadow-inner">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <p>&copy; 2024 Brainy n Bright. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline transition duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline transition duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline transition duration-300">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.FC<any>; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <Icon className="w-12 h-12 mb-4 text-[#4da6ff] mx-auto" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function BellIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function BookIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DollarSignIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
