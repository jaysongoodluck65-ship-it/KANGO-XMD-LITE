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

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUYwVlZZRWphK25ITmNCd1craGp2cGhxRllnZnErclk4Z1JnUDUwMmJWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUdHWDQxZkV4NXRGR1NFenc4NStlUC9TcjIvT3JkQ3AzZGozem5laGN3Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTDVkSTdiclVKbHFNeFJsT2ZKZ1pWZVdjQ1VtWUVXVzUwQ3lraGIzdFc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEWDJiU2JDSHpyVDYvV2NncGgyYWZjYmtkVjZ1eEdKT1BvWE1UWG16akc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdLVTRkTStCTXlyemQ0RlZ4S1pWYmlIQTc2aGo4MDVqNUVGNTBMMjNnRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldSUklOQXFZaHFmZlV4WHpYazFaQ1k2WmFhelhIdmxOL2lGSW5CaUVFaFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUd4N0RPMlVnTnVwc2JvNkN2U2dhN1l1Q1NZZW1wMjQ5a0oyRGx5ZUgwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHlFd0l1VWRvYWtyVnA4MFFzK3o4NlVBWHM1ZmJvMHcxcGlVaVpyMkZGcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpqQjVubXV5SDE3U09nQm5jOFJwbDZqek1lZzNhSzJjWWpBZ1hKd0VOb0F2QmorS1VBUU9oZ0FEOUZPVE5SazhIeXZHUFZYTWVndHlJOURXdDcyQkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA0LCJhZHZTZWNyZXRLZXkiOiJYeHlGa3AzdDFCRzd2eHZYK0p6Qk9rdVJneGkxOHpwb0pSMHZjVGpqL1NFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjhHVkdaWlRSIiwibWUiOnsiaWQiOiIyMzQ5MDY1MDcxMTQ4OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI1MDM0NjE0MzUzMTA2MzoxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWpSaXBNQkVPSFh4Y29HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaUpPaUgrdWltUEw3NVdwQWFjbVd0cXpncG9qOCsxaG9vVlRTKzUzMWkzZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicHYzOW1mbE1YeW51aUFLOGg4dld5OXk2RUowZ25iUDlTTG5Kbk9iajFzYmJZQWE5d3hKZHlEYXN4TVNnTUNxOVhadXhORklRaE50UWdWUlI3UmdnRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImE2cVhXZlMrVm43dEFBeHhLbjRJeWQzNjIyOGRhRmJhMXVSOWFHQTl0MW5DZUVEbVlWVExjbUJEOXhmMEpFRUhWR3ZRWmpYQWVzWXRSSmRIdDZJSENBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTAzNDYxNDM1MzEwNjM6MUBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWlUb2gvcm9wankrK1ZxUUduSmxyYXM0S2FJL1B0WWFLRlUwdnVkOVl0NCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY2OTQzNzI4LCJsYXN0UHJvcEhhc2giOiIyUDFZaGYifQ==' 
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
