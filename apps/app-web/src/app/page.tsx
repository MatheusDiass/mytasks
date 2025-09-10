import { BottomNav } from '@/components/BottomNav';
import { Carousel } from '@/components/Carousel';
import { DailyTaskCard } from '@/components/DailyTaskCard';
import { PriorityTaskCard } from '@/components/PriorityTaskCard';

export default function Home() {
  return (
    <div>
      <div className="mx-5">
        <p className="text-3xl">
          <strong>Welcome Matheus</strong>
        </p>

        <p className="mb-10">Have a nice day!</p>

        <p className="mb-2 text-2xl">
          <strong>My Priority Task</strong>
        </p>

        <Carousel>
          <PriorityTaskCard title="UI Design" progress={80} workingDays={10} />
          <PriorityTaskCard
            title="Laravel Task"
            progress={35}
            workingDays={5}
          />
          <PriorityTaskCard
            title="Edit Picture"
            progress={63}
            workingDays={8}
          />
        </Carousel>

        <p className="mt-10 text-2xl">
          <strong>Daily Task</strong>
        </p>

        <div className="flex flex-col gap-2 pt-3">
          <DailyTaskCard title="Work Out" />
          <DailyTaskCard title="Daily meeting" />
          <DailyTaskCard title="Reading a Book" />
          <DailyTaskCard title="Daily Meeting" />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
