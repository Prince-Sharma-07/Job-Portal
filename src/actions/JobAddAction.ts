//@ts-nocheck
// "use server";

// import prismaClient from "@/services/prisma";

// export async function addJob(formData) {
//   try {
//     await prismaClient.Job.create({
//       data: formData,
//     });
//     console.log("Job added successfully");
//     return { success: true, message: "Job added successfully" };
//   } catch (error) {
//     console.error("Error adding job:", error);
//     return { success: false, message: error.message };
//   }
// }

// adding bulk data to Database
// export async function addBulkJobs(dataArray) {
//     try {
//         await prismaClient.job.createMany({
//             data: dataArray
//         });
//         console.log("Bulk Jobs added successfully");
//         return { success: true, message: "Bulk Jobs added successfully" };
//     } catch (error) {
//         console.error("Error adding Bulk jobs:", error);
//         return { success: false, message: error.message };
//     }
// }
