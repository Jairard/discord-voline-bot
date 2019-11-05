const {
  Command,
} = require('discord.js-commando');
const {
  isAuthorized,
} = require('@helpers/permission.js');
const {
  moderatorIdRole,
} = require('@/config.js');


// class Clear extends Command {
//   constructor(client) {
//     super(client, {
//       name: 'clear',
//       group: 'administration',
//       memberName: 'clear',
//       description: 'Clean message in a channel (need to be moderator)',
//       examples: ['!clear'],
//     });
//   }

//   run(msg) {
//     const roles = [moderatorIdRole];
//     const { member } = msg;
//     isAuthorized(member, roles).then((err) => {
//       if (!err) {
//         if (msg.channel.type == 'text') {
//           msg.channel.fetchMessages().then(messages => {
//             msg.channel.bulkDelete(messages);
//           }).catch(err => {
//             msg.channel.send('Error while doing Bulk Delete');
//             msg.channel.send(`\`\`\`${err}\`\`\``);
//           });
//         }
//       } else {
//         msg.reply('**You don\'t have rights to execute this command**');
//       }
//     }).catch((e) => {
//       console.error(e);
//       msg.reply('Something went wrong');
//     });
//   }
// }

// module.exports = Clear;
