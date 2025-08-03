import { cn } from "@/utils/cn";

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "flex flex-1 h-full justify-center items-end py-8",
        className
      )}
    >
      <div className="flex justify-center items-end">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Star Wars Wiki
        </p>
      </div>
    </footer>
  );
}
