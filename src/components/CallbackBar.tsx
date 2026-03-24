export default function CallbackBar() {
  return (
    <div className="bg-blue text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <span className="text-sm font-medium">Need help? Get a call back!</span>
        <a
          href="tel:0402856783"
          className="text-lg font-bold hover:text-accent transition-colors"
        >
          Call 0402 856 783
        </a>
      </div>
    </div>
  );
}
