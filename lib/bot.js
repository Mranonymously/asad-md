const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/AsadMDofficial/Asad-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://Asad-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/AsadMDofficial/Asad-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/Asad-MD/ASAD-MD",
REPO_NAME: process.env.REPO_NAME || "ASAD-MD",
BOT_NAME: process.env.BOT_NAME || "ASAD-MD",
DESCRIPTION: process.env.DESCRIPTION || "ASAD MD PAKISTANI POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "923359216317",
OWNER_NAME: process.env.OWNER_NAME || "AsadMD Official",
ST_SAVE: process.env.ST_SAVE || "ASAD-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "ASAD-MD-BY-AsadMD-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY ASAD-MD`* _*POWERD BY*_ *AsadMD Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "ASAD-MD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ ASAD-MD BY Asad-MD OFFICIAL*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363348739987203@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || " https://whatsapp.com/channel/0029VbCWGXr9RZAR8ZIbQc1y",
INSTA: process.env.INSTA || "https://Instagram.com/navaan_releated",
ALIVE_IMG: process.env.ALIVE_IMG || "https://h.uguu.se/KsZZhDfs.jpeg",
OWNER_IMG: process.env.OWNER_IMG || "https://h.uguu.se/KsZZhDfs.jpeg",
CONVERT_IMG: process.env.CONVERT_IMG || "https://h.uguu.se/KsZZhDfs.jpeg",
AI_IMG: process.env.AI_IMG || "https://h.uguu.se/KsZZhDfs.jpeg",
SEARCH_IMG: process.env.SEARCH_IMG || "https://h.uguu.se/KsZZhDfs.jpeg",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://h.uguu.se/KsZZhDfs.jpeg",
MAIN_IMG: process.env.MAIN_IMG || "https://i.ibb.co/s9Cr1VSX/file-000000006d207207b33a182396f1a27f.png",
GROUP_IMG: process.env.GROUP_IMG || "https://h.uguu.se/KsZZhDfs.jpeg",
FUN_IMG: process.env.FUN_IMG || "https://h.uguu.se/KsZZhDfs.jpeg",
TOOLS_IMG: process.env.TOOLS_IMG || "https://h.uguu.se/KsZZhDfs.jpeg",
OTHER_IMG: process.env.OTHER_IMG || "https://h.uguu.se/KsZZhDfs.jpeg",
MOVIE_IMG: process.env.MOVIE_IMG || "https://h.uguu.se/KsZZhDfs.jpeg",
NEWS_IMG: process.env.NEWS_IMG || "https://h.uguu.se/KsZZhDfs.jpeg",
PP_IMG: process.env.PP_IMG || "https://h.uguu.se/KsZZhDfs.jpeg"
};
