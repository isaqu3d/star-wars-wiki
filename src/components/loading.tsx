import { LoaderIcon } from "lucide-react";

export function Loading() {
  return (
    <div className="flex justify-center items-center mt-12 gap-2">
      <p className="text-xl font-bold">May the Force be with you.</p>
      <span>
        <LoaderIcon className="animate-spin" />
      </span>
    </div>
  );
}
