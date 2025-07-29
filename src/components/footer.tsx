export function Footer() {
  return (
    <footer className="mb-8 flex flex-1 justify-center items-end">
      <div className="flex justify-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Star Wars Wiki
        </p>
      </div>
    </footer>
  );
}
