import { BottomNav } from '@/components/BottomNav';

export default function WithNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <BottomNav />
    </div>
  );
}
