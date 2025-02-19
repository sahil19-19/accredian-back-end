import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import sendEmail from '../services/sendEmail.js'
dotenv.config();

const prisma = new PrismaClient();

const create_referral = async (req, res) => {
    try {
        const {
            referrerEmail,
            refereeEmail,
            refereeName,
            refereeNumber,
            refCourse,
        } = req.body;

        if (
            !refereeName ||
            !referrerEmail ||
            !refereeEmail ||
            !refereeNumber ||
            !refCourse
        ) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const referral = await prisma.referral.create({
            data: {
                referrer_email: referrerEmail,
                referee_name: refereeName,
                referee_email: refereeEmail,
                referee_number: refereeNumber,
                course: refCourse,
            },
        });
        const status = await sendEmail(referral);
        if(!status){
            
        }
        res.status(201).json({
            message: "Referral Success!",
            referral: referral,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: "An error occured",
            err: err.message,
        });
    }
};

export default create_referral;
