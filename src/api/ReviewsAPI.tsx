import { Report } from "../entities/Report"
import { Review } from "../entities/Review"

export const getReviews = async (discorid : number): Promise<Review[]> => {
    const res = await fetch("https://manti.vendicated.dev/getUserReviews?snowflakeFormat=string&discordid=" + discorid.toString())
    return await res.json() as Review[]
}

export const getReports = async():Promise<Report[]> => {
    const res = await fetch("https://manti.vendicated.dev/getReports")
    return await res.json() as Report[]
}

export const deleteReviews = async(reviews : Report[]) => {
    for (let review of reviews) {
        var data:any = {
            reviewid: review.reviewid,
            token : localStorage.getItem("token")
        }

        var response = (await (await fetch("https://manti.vendicated.dev/deleteReview" ,{method:"POST",body:JSON.stringify(data)})).json());
        if (response["successful"]) {
            (window as any).emit("showToast",{message:"Deleted Review: " + review.reviewid,severity:"success"})
        } else {
            (window as any).emit("showToast",{message:"Failed to delete Review" + review.reviewid,severity:"error"})
        }
        
    }
    return "success"
}