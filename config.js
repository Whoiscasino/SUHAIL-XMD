const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,917012279397";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "917012279397,917012279397";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_40_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgODAsXG4gICAgICAgIDk5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk5LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUxLFxuICAgICAgICA2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTgwLFxuICAgICAgICA3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDYyLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgzLFxuICAgICAgICA1NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTczLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQzLFxuICAgICAgICA0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgwLFxuICAgICAgICA5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NixcbiAgICAgICAgMTA5LFxuICAgICAgICA1NyxcbiAgICAgICAgODksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkUrSHpycjlsamFva3BvanBHVFFjRU5WMEhsUU1yYTRTaUNGdGZQc0JweWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3MDEyMjc5Mzk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwRjcyMEIxRTRCOTlENUU1QTJFREFGMUQyODNDMENDNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE3ODk2MTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTcwMTIyNzkzOTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAwRjFBRDA1OTU4Q0ZFMkM5QjhCQjNCRkQ1NTFDRDlGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTc4OTYxNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOa2NYU2V5MVFMaThranBDczBRUTh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjVlZmEyNzA1LTk0ZmUtNDZiYS1hYzEyLWNkYzY3ODA3OWMxNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICAxODQsXG4gICAgICAxNDgsXG4gICAgICAxNTksXG4gICAgICAyNDgsXG4gICAgICAzNyxcbiAgICAgIDgzLFxuICAgICAgMTc5LFxuICAgICAgNjUsXG4gICAgICAxMTYsXG4gICAgICAxNDksXG4gICAgICAyMTksXG4gICAgICAyMDIsXG4gICAgICA4NixcbiAgICAgIDI0OCxcbiAgICAgIDEwMyxcbiAgICAgIDE1NixcbiAgICAgIDE2OSxcbiAgICAgIDE0LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgNDIsXG4gICAgICAyOSxcbiAgICAgIDIwOSxcbiAgICAgIDg2LFxuICAgICAgMTk0LFxuICAgICAgODgsXG4gICAgICAyMjEsXG4gICAgICAxMzMsXG4gICAgICAyMjAsXG4gICAgICAxMjYsXG4gICAgICA5NixcbiAgICAgIDgsXG4gICAgICA0NSxcbiAgICAgIDE5LFxuICAgICAgMjI1LFxuICAgICAgNTcsXG4gICAgICAxMDksXG4gICAgICAzNixcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZOTRKTTVKV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3MDEyMjc5Mzk3OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDAzMjIzNDk0Njk4MjM6NTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4aW0IOGgu+qqrvCdlaMg4aW06qqW4Kqh4oWI6qqA6qquXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2JaODhRSEVLbUc1TGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJYXEzQ05TRFpvcFdlL0JLaEx4QTRNNENuK1A3UHlBK1R2eVQwR2E3UFUwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInl5Y0NSVitVcnk3KzE2TU5IWGY2M0xrKzVNUkZSQkpMNEpzUFBybXRXYTR2SDgyQkJXOWFkbkcxSFBUZW92S2ZrbjNTSjFHUmt2SERoQStnVFFjaEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhSbzVENExyRlNiSUVZTUNLMVZGSnhiM1dPYzcvUHd0VWlIR1RZS1luU2hwWTVtdTdQcDdGazdQWTlPelB0OHNOaUtFMnNBWnVOV2FoTXpIQTJUa2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzAxMjI3OTM5Nzo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE3ODk2MTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQUTdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBRNy5qc29uIjogIntcImtleURhdGFcIjpcIkxOc1l5VXZudEM2bUtmdGtuakpNZmV1UXJTSkhidGZ5alpTMXJ2NTI1NEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAyMzU1MDE4MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxNzg5NjE1NDUxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᥴ ᠻꪮ𝕣 ᥴꪖડⅈꪀꪮ",
  ownername:process.env.OWNER_NAME|| "who is casino",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
