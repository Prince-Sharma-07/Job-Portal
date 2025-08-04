//@ts-nocheck
'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// const users = []

// export async function handleSignUp(formData){
//      const userCookies = await cookies();
//      const existing = users.find(({email , pass})=>email === formData.email && pass === formData.pass )
//      if(existing){
//         return {
//             status: false,
//             msg: "User already exists"
//         }
//      }else{
//         users.push(formData)
//         userCookies.set('user' , JSON.stringify(formData))
//         return {
//             status : true,
//             msg: "User signed in successfully"
//         }
//      } 
// }

export async function logout() {
    const userCookies = await cookies();
    userCookies.delete('token');
    redirect('/')
}


