export const CodeConfirmation = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between gap-2 mb-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            key={index}
            className="w-10 h-10 border-b-3 border-brand-300 focus:outline-none focus:border-brand text-center"
            type="text"
          />
        ))}
      </div>

      <p className="text-sm ">
        Don&apos;t receive a code? <span className="text-brand">Resend</span>
      </p>
    </div>
  );
};
