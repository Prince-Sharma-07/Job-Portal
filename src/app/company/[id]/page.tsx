import DeleteCompanyBtn from "@/components/ui/DeleteCompanyBtn";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  if(!id){
    notFound()
  }
  const res = await fetch("http://localhost:3000/api/company/" + id);
  const data = await res.json();
  const company = data.data;
  if(!company) {
    notFound()
  }

  return (
    <div className="pt-16 min-h-screen">
      {JSON.stringify(company)}
      <DeleteCompanyBtn id={company.id} />
    </div>
  );
}
