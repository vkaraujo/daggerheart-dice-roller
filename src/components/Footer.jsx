export default function Footer() {
  return (
    <div className="mt-10 text-center text-sm opacity-70">
      <img
        src="/dpr-community-logo.png"
        alt="Darrington Press Community Logo"
        className="w-48 mx-auto mb-2"
      />
      <p>
        This project is fan content covered under the{" "}
        <a
          href="https://darringtonpress.com/license/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Darrington Press Community Gaming License
        </a>.
      </p>
    </div>
  );
}
