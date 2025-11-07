//@ts-nocheck
"use client";
import { redirect } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { useUserContext } from "./UserContextProvider";

const savedContext = createContext(null);

export default function SavedJobsProvider({ children }) {
  const [saved, setSaved] = useState([]);
  const {userData} = useUserContext();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("savedJobs")) ?? [];
    setSaved(localData);
  }, []);

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(saved));
  }, [saved]);

  function addToSave(job) {
    if (!userData) {
      toast("Please login first!");
      redirect("/login");
    }
    if (saved.find((favJob) => job.id === favJob.id)) {
      toast("job is already saved");
    } else {
      setSaved((prev) => [...prev, job]);
      toast("Job Saved Successfully!");
    }
  }

  function removeFromSave(id) {
    console.log("prev", saved);
    setSaved((prev) => prev.filter((job) => job.id !== id));
  }

  return (
    <savedContext.Provider value={{ saved, addToSave, removeFromSave }}>
      {children}
    </savedContext.Provider>
  );
}

export function useSavedContext() {
  return useContext(savedContext);
}
