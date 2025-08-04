import { Separator } from "@radix-ui/themes";

export default function HomeSearchBar() {
  return (
    <div className="w-[80%]">
      <form
        action={"/search"}
        method="GET"
        className="flex items-center h-full rounded-xl bg-white"
      >
        <div className="flex-1 flex justify-between p-3 px-4 items-center">
        <input
          type="text"
          name="q"
          placeholder="Job Title or Company"
          className="p-2 outline-none border-none rounded"
        />
        <Separator orientation="vertical" />
        <select defaultValue="Select Location" className="select bg-transparent outline-none border-non">
          <option disabled={true}>Select Location</option>
          <option>Inter</option>
          <option>Poppins</option>
          <option>Raleway</option>
        </select>
        <Separator orientation="vertical" />
        <select defaultValue="Select Category" className="select bg-transparent">
          <option disabled={true}>Select Category</option>
          <option>Inter</option>
          <option>Poppins</option>
          <option>Raleway</option>
        </select>
        </div>
        <button
          type="submit"
          className="flex gap-2 items-center justify-center bg-btn-primary hover:bg-btn-hover cursor-pointer h-full w-[20%] text-white p-2 rounded-r-xl"
        >
         <img src="/search-icon.svg" alt="" /> Search Job
        </button>
      </form>
    </div>
  );
}
