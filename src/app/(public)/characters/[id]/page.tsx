import { NextRequest } from "next/server";

export default function Characters(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  return (
    <div className="font-sans flex">
      <h1 className="text-2xl font-bold">Characters Page</h1>
    </div>
  );
}
