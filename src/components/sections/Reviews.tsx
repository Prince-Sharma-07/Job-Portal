"use client";
import { Avatar, Tabs, TextArea } from "@radix-ui/themes";
import { SendIcon } from "lucide-react";
import { useState } from "react";
import { Company, Review, User } from "../../../generated/prisma";
import { useUserContext } from "@/contexts/UserContextProvider";
import { ReviewWithUser } from "@/types";

export default function Reviews({
  company,
  reviews,
}: {
  company: Company;
  reviews: ReviewWithUser[];
}) {
  const [content, setContent] = useState("");
  const [reviewsList, setReviewsList] = useState(reviews);
  const {userData} = useUserContext();

  async function handleReview() {
    const review = {
      content: content,
      company_id: company.id,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/review`,
      {
        method: "POST",
        body: JSON.stringify(review),
      }
    );
    const data = await res.json();
    const newReview = data.data as ReviewWithUser;
    setReviewsList((prev) => [newReview, ...prev]);
    setContent("")
  }

  return (
    <Tabs.Content value="reviews" className="flex flex-col gap-6">
      {userData?.id !== company.companyOwnerId && <div className="flex flex-col gap-2">
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        size={"3"}
        placeholder="Post a review…"
      />
      <button
        onClick={handleReview}
        className="flex items-center gap-2 px-2 p-1 text-white font-medium bg-btn-primary hover:bg-btn-hover w-fit rounded-md cursor-pointer"
      >
        Post <SendIcon className="h-4 w-4" />
      </button>
      <div className="border-t mt-4 border-gray-300 dark:border-[#2E3130]"></div>
      </div>
      
      }
      
      <div className="flex flex-col gap-3">
      <h2 className="text-xl font-medium">Top Reviews</h2>
      <div className="flex flex-col gap-2">
        {reviewsList.length ? reviewsList?.map((review) => (
          <div key={review.content} className="flex gap-2 items-center">
             <Avatar radius="full" size={"1"} fallback={review?.user?.name[0].toUpperCase()}/>
             {review.content}</div>
        )) : <div>No reviews yet...</div>}
      </div>
      </div>
    </Tabs.Content>
  );
}
