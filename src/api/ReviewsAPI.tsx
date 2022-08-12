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