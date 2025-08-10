import { Job } from "../../../generated/prisma";

export default function ApplyJobBtn({
  job,
  hasApplied,
  setHasApplied,
}: {
  job: Job;
  hasApplied: boolean;
  setHasApplied: (val: boolean) => void;
}) {
  async function handleSubmit() {
    const res = await fetch("http://localhost:3000/api/job/apply/" + job?.id);
    setHasApplied(!hasApplied);
  }
  return (
    <button
      onClick={handleSubmit}
      className="bg-btn-primary hover:bg-btn-hover text-white px-4 py-2 rounded-md"
    >
      Apply Job
    </button>
  );
}
