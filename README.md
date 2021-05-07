## Simple Voline bot

## Dependencies
 - axios
 - discord.js
 - discord.js-commando
 - module-alias
 - node-opus
 - puppeteer
 - xml2json
 - ytdl-core

## Commands
 - @VolineBot : Write a quote

### Administration
 - !clear : Clean message in a channel (need to be moderator)
 - !infos <@someone> : Get some info on someone
 - !kick <@someone> : Kick someone from the Discord (need to be moderator)
 - !anwer <@someone> : Send DM to someone (need to be in a specific channel and be member or moderator)
 - !mediation isolation|mute|simple <@someone> : Give/remove "isolation|mute|en mediation" role (need to be member or moderator)
 - !poll <question> : Create a poll with pos/neg/abs (need to be moderator or member)
 - !polls <question> -- rep 1 -- rep2 -- rep3 ... : Create a poll multiple answers (need to be moderator or member)
 - !promote member <@someone> : Give rights to someone (need to be moderator)
 - !promote user <@someone> : Give rights to someone (need to be moderator or member)
 - !readonly <@someone> <nbDays> : Remove all roles an give readonly role a specific nb of days (need to be moderator or member)
 - !ban <@someone> <nbDays> : Remove all roles an give ban role a specific nb of days (need to be moderator or member)

### Fun
- !clivage <text> : Answer with sé de drouate or sé de gôche
- !meme <index> : Display random meme image or the meme at the index provided
- !propagande <index> : Display random propagande image or the propagande at the index provided
- !q <text> : Answer yes or no
- !rate <text> : Give a number between 0 and 10 to rate something

### Media
- !asi <url> : get links of an emission or the pdf of an article
- !diplo <url> : convert monde-diplomatique article to pdf
- !hs <url> : get links of an emission
- !mediapart <url> : convert mediapart article to pdf
- !rss : Check for news on rss

### Vocal
 - !leave : Make bot leave vocal-channel
 - !radio <url> : Set the bot join chanel and play radio (default radiolib)
 - !yt : Commands to use bot in vocal with youtube
   - !yt add <url> : Add a music in the playList
   - !yt clear : Clear the playlist
   - !yt list : Display the playlist
   - !yt play <url> : Play the url or the playlist
   - !yt remove <index> : Remove a music by index in the playlist
   - !yt skip : Skip the actual music
