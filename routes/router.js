import express from "express";
import create_referral from '../controllers/create_referral.js'
const router = express.Router();

router.post('/referrals/',create_referral);

export default router;