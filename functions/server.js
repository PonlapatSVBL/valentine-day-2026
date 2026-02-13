const express = require('express');
const serverless = require('serverless-http'); // เพิ่มตัวนี้
const app = express();
const router = express.Router();

router.get('/surprise-content', (req, res) => {
    res.json({
        title: "Happy Valentine's Day ❤️",
        songTitle: "Will You Be My Valentine",
        audioUrl: "/audio/valen_Will_You_Be_My_Valentine.mp3",
        scratchPrize: "รางวัล: ทริปเที่ยวตามใจเธอ! ✈️",
        finalNote: "ปีนี้ก็ฝากตัวด้วยนะคุณดื้อ ✨",
        reasons: [
            "ขอบคุณที่เป็น Safe zone ให้เสมอ 🫂✨", // ใช้ 🫂 (กอด) แทนความอุ่นใจ และ ✨ เพิ่มความละมุน
            "ขอบคุณที่ช่วยคิดว่าจะกินอะไรดี (ถึงจะจบที่เดิมตลอด) 🥘🫠", // ใช้ 🥘 (ของกิน) และ 🫠 (หน้าละลาย) สื่อถึงความเหนื่อยใจขำๆ ที่คิดไม่ออกสักที
            "ปีนี้ก็ใช้ชีวิตให้สนุกไปด้วยกันอีกนะ 🚀🌈", // ใช้ 🚀 (จรวด) แทนการเดินทางไปข้างหน้า และ 🌈 ให้ความรู้สึกสนุกสดใส
            "เป็นแฟนที่น่ารักแบบนี้ต่อไปนะ (อนุญาตแล้ว) 🫡💖" // ใช้ 🫡 (ตะเบ๊ะรับทราบ) เพื่อรับกับคำว่า "อนุญาตแล้ว" ให้ดูเหมือนเราเป็นหัวหน้ากวนๆ
        ],
        gallery: [
            "/images/image1.jpg",
            "/images/image2.jpg",
            "/images/image3.jpg",
            "/images/image4.jpg",
            "/images/image5.jpg",
            "/images/image6.jpg",
        ],
        coupleIcon: "/images/image_couple.jpg"
    });
});

app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);