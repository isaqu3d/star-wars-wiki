type InputProps = {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ icon, iconPosition = "left", ...props }: InputProps) {
  return (
    <div
      className={`flex items-center border border-gray-300 rounded-lg w-full max-w-md px-3 py-2 gap-2 focus-within:ring-2 focus-within:ring-blue-500`}
    >
      {icon && iconPosition === "left" && (
        <span className="text-gray-500">{icon}</span>
      )}

      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none flex-1 text-white placeholder-gray-400"
        {...props}
      />

      {icon && iconPosition === "right" && (
        <span className="text-gray-500">{icon}</span>
      )}
    </div>
  );
}
