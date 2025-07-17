const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://dew-md-data.pages.dev/DATA-BASE/Data-File.json",
AUTO_SITE: process.env.AUTO_SITE || "https://dew-md.up.railway.app",
BAND_URL: process.env.BAND_URL || "https://dew-md-data.pages.dev/DATA-BASE/BandUser.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/KING-HANSA/DEW-MD-BETA-TEST",
REPO_NAME: process.env.REPO_NAME || "D-TEC-MINI",
BOT_NAME: process.env.BOT_NAME || "D-TEC-MINI",
DESCRIPTION: process.env.DESCRIPTION || "SRI LANKAN AI BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94785316830",
OWNER_NAME: process.env.OWNER_NAME || "YASAS DILEEPA",
ST_SAVE: process.env.ST_SAVE || "D-TEC-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "D-TEC-MD-BY-DILEEPA",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`ඔයාගේ ස්ටේටස් එක මම තමයි මුලින්ම බැලුවෙ`*",
FOOTER: process.env.FOOTER || "D-TEC-MD",
COPYRIGHT: process.env.COPYRIGHT || "D-TEC-MINI WHA BOT BY YASAS DILEEPA",
VERSION: process.env.VERSION || "2.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363420920178095@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VbAZvki4NVinhwzxWs2U",
INSTA: process.env.INSTA || "https://Instagram.com/",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/Z60XM0SS/Whats-App-Image-2025-07-17-at-7-25-24-AM.jpg",
OWNER_IMG: process.env.OWNER_IMG || "https://i.ibb.co/Z60XM0SS/Whats-App-Image-2025-07-17-at-7-25-24-AM.jpg",
CONVERT_IMG: process.env.CONVERT_IMG || "https://i.ibb.co/Z60XM0SS/Whats-App-Image-2025-07-17-at-7-25-24-AM.jpg",
AI_IMG: process.env.AI_IMG || "https://i.ibb.co/Z60XM0SS/Whats-App-Image-2025-07-17-at-7-25-24-AM.jpg",
SEARCH_IMG: process.env.SEARCH_IMG || "https://i.ibb.co/Z60XM0SS/Whats-App-Image-2025-07-17-at-7-25-24-AM.jpg",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://i.ibb.co/Z60XM0SS/Whats-App-Image-2025-07-17-at-7-25-24-AM.jpg",
MAIN_IMG: process.env.MAIN_IMG || "https://i.ibb.co/Z60XM0SS/Whats-App-Image-2025-07-17-at-7-25-24-AM.jpg",
GROUP_IMG: process.env.GROUP_IMG || "https://i.ibb.co/Z60XM0SS/Whats-App-Image-2025-07-17-at-7-25-24-AM.jpg",
FUN_IMG: process.env.FUN_IMG || "https://i.ibb.co/Z60XM0SS/Whats-App-Image-2025-07-17-at-7-25-24-AM.jpg",
TOOLS_IMG: process.env.TOOLS_IMG || "https://i.ibb.co/Z60XM0SS/Whats-App-Image-2025-07-17-at-7-25-24-AM.jpg",
OTHER_IMG: process.env.OTHER_IMG || "https://i.ibb.co/Z60XM0SS/Whats-App-Image-2025-07-17-at-7-25-24-AM.jpg",
MOVIE_IMG: process.env.MOVIE_IMG || "https://i.ibb.co/Z60XM0SS/Whats-App-Image-2025-07-17-at-7-25-24-AM.jpg",
NEWS_IMG: process.env.NEWS_IMG || "https://i.ibb.co/Z60XM0SS/Whats-App-Image-2025-07-17-at-7-25-24-AM.jpg",
PP_IMG: process.env.PP_IMG || "https://i.ibb.co/Z60XM0SS/Whats-App-Image-2025-07-17-at-7-25-24-AM.jpg"
};
