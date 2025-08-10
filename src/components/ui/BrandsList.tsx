
export default function BrandsList() {
  return (
    <div
      className="flex justify-around w-full max-md:gap-4 bg-black/80 overflow-auto p-2 md:px-10 md:py-6 "
      id="jobs"
    >
      <img src={"/spotify-logo.svg"} height={120} width={120} />
      <img src={"/slack-logo.svg"} height={120} width={120} />
      <img src={"/adobe-logo.svg"} height={120} width={120} />
      <img src={"/asana-logo.svg"} height={120} width={120} />
      <img src={"/linear-logo.svg"} height={120} width={120} />
    </div>
  );
}
