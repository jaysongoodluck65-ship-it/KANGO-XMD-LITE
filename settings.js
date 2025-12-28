//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia08vR2FyWUgzME14bk9lQWtkWWJIazBpZTZWRzdlMVlPMnRkNnJ4dWxrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFQzOS9tNjhDcGc1aHRpMnczM2w1ek0yNVpvODhZRi9yQzA3ZTFkS3dpTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSXFqcHRXRXpGYzNZa3d1M3BheHRxOThuWVduN3NlclJzUFBXczZoRlhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWaXpGYUVRR214dkE1amFDdHRnclNzc0w1OWhVL2M1aVU5dFd6L3drTlJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdJeEVXSTNIRGU3alZBU1JjS3ZvcGJUcjdHSjJTek1Ubkdab1FUNE1QVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik91azlqZHdlT0FRNkNnMitLSHg0SXUzWGd3M1lIQXE2eDVlVW54TzhDQUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ095REYvN29LU2xrTXEwa1E1T3ljK2R5enE1UFZ2aCt3azd6ZjBSYWIzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFpiT0lWNFdibGk4emtvRTdBcStiMGd2UjhGYStuOU9RMW5mMEk3bGx5MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFYZ3A2OGUxbDVRU21qSWZqOXlCeUtTL21hMG1VQnUzaEdnQXlpZ0trWDNhTlJRWEMreW04bTV2M000TGkvR0Q3SFlTWVFzeXJBd3BucDgwc01ZaUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiJWbEVITjY0RWhoQ1p2UjJZV2kxUmt6MXNxN1BucVpHbGNqNmNpOEZ0ZVpVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNjUwNzExNDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDNDk1QTYyNkZBNjQ5MjI2RkI0Mjc3NDlFNTVBMjEwIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjY5MDQzNTh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNjUwNzExNDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDMjM5NzA5NjZCNzIwODI2ODk1ODhFODg2MUM1NkYyIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjY5MDQzNjJ9XSwibmV4dFByZUtleUlkIjo4MjIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MjIsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNDJWSDg0Q1kiLCJtZSI6eyJpZCI6IjIzNDkwNjUwNzExNDg6MzlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI1MDM0NjE0MzUzMTA2MzozOUBsaWQiLCJuYW1lIjoiSkFZU09OIPCfjLjwn4y4In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOTGowTklIRUpTa3c4b0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyV2hGYzhrUTI3N1JaVkZNYUd5VFVncmxmd1lWNFN3d3gxUmtpcmtNRFZJPSIsImFjY291bnRTaWduYXR1cmUiOiIxb253MjR0VExvZmo2S2tiSlBCdTFubjAwRExDR1diYy94b1AxcTg0ZytJSEZoNU9WVy9zREhSQ0hFcDJIZ3BYdVd1VVg5Sm9CQldaWUVpa1hsb3FBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVHo5V3orbWhmK09NMkZSbEF0R1BXU2p5UjdHTFNFd01SNzJHNzZ6VVZVZVBrNGM4OHBEV05YV3BOQ09ZeHk5RURXZ2pETlZGREZiY1ZXUXhYeTllQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDM0NjE0MzUzMTA2MzozOUBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTFvUlhQSkVOdSswV1ZSVEdoc2sxSUs1WDhHRmVFc01NZFVaSXE1REExUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY2OTA0NTQ1LCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUx5biJ9' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '233509977126' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
