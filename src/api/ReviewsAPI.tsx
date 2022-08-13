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
        await (await fetch("https://manti.vendicated.dev/deleteReview?reviewid=" ,{method:"POST",body:JSON.stringify(data)})).json()
    }
    return "success"
}