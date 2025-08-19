//@ts-nocheck
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useUserContext } from "./UserContextProvider";
import { redirect } from "next/navigation";

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
      alert("Please login first!");
      redirect("/login");
    }
    if (saved.find((favJob) => job.id === favJob.id)) {
      alert("job is already saved");
    } else {
      setSaved((prev) => [...prev, job]);
      alert("Job Saved Successfully!");
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
