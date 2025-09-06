'use client';
import { FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import HomeSvg from '@/assets/icons/home.svg';
import CalendarSvg from '@/assets/icons/calendar.svg';
import UserSvg from '@/assets/icons/user-menu.svg';

export const BottomNav: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const tabs = [
    { name: 'Home', icon: HomeSvg, href: '/' },
    { name: 'Calendar', icon: CalendarSvg, href: '/calendar' },
    { name: 'Profile', icon: UserSvg, href: '/profile' },
  ];

  const handleNavigate = (to: string) => {
    router.push(to);
  };

  return (
    <div className="bg-brand-white flex pl-15 pr-15 justify-between md:justify-center md:gap-30 py-3 fixed bottom-0 w-full shadow-lg/20">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = pathname === tab.href;
        return (
          <Icon
            key={tab.name}
            className={`${isActive ? 'text-brand' : 'text-brand-300'}`}
            onClick={() => handleNavigate(tab.href)}
          />
        );
      })}
    </div>
  );
};
