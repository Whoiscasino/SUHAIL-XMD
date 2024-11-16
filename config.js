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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.(/[\s+]/g, '') : "917012279397";




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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_53_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDM5LFxuICAgICAgICAzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlYzLzNZbzEvd2FHa2FhcS9sWnRsN2dsSGhHeHJlamwzWE02NFNnZGlZcG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNwWFE0NEl2UlBLYkFUcll4ckk5Y0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDVkMjAxMjgtMzU5ZS00Zjc0LWFiM2YtOWIxMjVjN2VjOGQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMTc5LFxuICAgICAgNDQsXG4gICAgICAyMDEsXG4gICAgICAyMzIsXG4gICAgICAxMjIsXG4gICAgICAxODQsXG4gICAgICAxNTMsXG4gICAgICAyMDcsXG4gICAgICAxMCxcbiAgICAgIDQ5LFxuICAgICAgNDksXG4gICAgICAxNTAsXG4gICAgICA1OSxcbiAgICAgIDE0NSxcbiAgICAgIDIwNixcbiAgICAgIDIyNSxcbiAgICAgIDEyMyxcbiAgICAgIDIxMixcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDIwOSxcbiAgICAgIDUzLFxuICAgICAgMTE0LFxuICAgICAgNDQsXG4gICAgICAyMzgsXG4gICAgICAxODEsXG4gICAgICAxMjIsXG4gICAgICAyMzcsXG4gICAgICAxNDAsXG4gICAgICA5MCxcbiAgICAgIDE0NixcbiAgICAgIDgsXG4gICAgICAyMzUsXG4gICAgICAxNDIsXG4gICAgICAyMTAsXG4gICAgICAyMjUsXG4gICAgICAxMjAsXG4gICAgICAyMzQsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRldRREpSMUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzAxMjI3OTM5NzozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTAwMzIyMzQ5NDY5ODIzOjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05iWjg4UUhFTWJINHJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSWFxM0NOU0Rab3BXZS9CS2hMeEE0TTRDbitQN1B5QStUdnlUMEdhN1BVMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHaE5CcHR1MllqT1NwWFV1QldIcUpnRkZZcTFDSVVhVUJYSlBGYnM0U3M4cXRyc3ZzQ2xTQk9FeEZTc2dtemFUSEJsY2xER21ZU056YTRwQW1yUW9BZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvZjFXUUZoT2NqNkU5RklFcG13OEEySjdabVNpRkw5bm9zdnFyaVZYcGM3ZXBWVkN2Q3JjbUtSNXZQVVVDODJwY28vakVqU080VWNna29kQ0FBbW1qZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTcwMTIyNzkzOTc6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNzY1MTk0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWdnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZ2cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwNyt1ZXdVY0JZSXoxeFRXaGE0UmN6a1p5VU52bzlEc2UxNWlMajZvWkp3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMjM1NTAxNjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
