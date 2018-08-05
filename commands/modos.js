const Discord = require('discord.js');
const { moderatorIdRole, annoncesIdChannel, volontaireIdRole } = require('../config.json');
const { isAuthorized } = require('../helpers/permission.js');

module.exports = {
  name: 'modos',
  description: 'Random moderators',
  execute(message) {
    const notAllowedMsg = 'you are not allowed to random modos';
    const roles = [moderatorIdRole];

    isAuthorized(message, '', notAllowedMsg, roles, () => {

      const moderatorsId = message.guild.roles.get(moderatorIdRole).members.map(m => m.user.id);
      const moderatorRole = message.guild.roles.get(moderatorIdRole);
      for (let i = 0; i < moderatorsId.length; i += 1) {
        const moderator = message.guild.members.get(moderatorsId[i]);
        moderator.removeRole(moderatorRole);
      }
      const membersId = message.guild.roles.get(volontaireIdRole).members.filter(m => {
        return !~moderatorsId.indexOf(m.id);
      }).map(m => m.id);
      let member0;
      let member1;
      let member2;
      if (membersId.length < 4) {
        member0 = message.guild.members.get(membersId[0]);
        member1 = message.guild.members.get(membersId[1]);
        member2 = message.guild.members.get(membersId[2]);
        member0.addRole(moderatorRole).catch(console.error);
        member1.addRole(moderatorRole).catch(console.error);
        member2.addRole(moderatorRole).catch(console.error);
      } else {
        let modo1 = -1;
        let modo2 = -1;
        let modo3 = -1;
        do {
          modo1 = Math.floor(Math.random() * membersId.length);
          modo2 = Math.floor(Math.random() * membersId.length);
          modo3 = Math.floor(Math.random() * membersId.length);
        } while (modo1 === modo2 || modo3 === modo1 || modo3 === modo2);
        member0 = message.guild.members.get(membersId[modo1]);
        member1 = message.guild.members.get(membersId[modo2]);
        member2 = message.guild.members.get(membersId[modo3]);
        member0.addRole(moderatorRole).catch(console.error);
        member1.addRole(moderatorRole).catch(console.error);
        member2.addRole(moderatorRole).catch(console.error);
      }

      const embed = new Discord.RichEmbed()
        .setTitle('Random modos log')
        .setColor('#5599ff')
        .setDescription(`${member0.user.username}, ${member1.user.username} and ${member2.user.username} are now moderator`)
        .setFooter(`Random moderators launched by: ${message.author.username}`, `${message.author.avatarURL}`);

      const channel = message.client.channels.find('id', annoncesIdChannel);
      channel.send({ embed });
    });
  },
};
