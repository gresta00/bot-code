//諸設定
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = 'dt!'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


//メインプログラム

client.on("message", async message => {
  if (!(message.guild.name.match("果実学園"))) {

    if (message.content.match(/OTg/)) {
        if (message.content.match(/.G/)) {
      
        message.delete();
        console.log("del message")
        message.channel.send(
            {embed: {
              color: 0x00ff33,
              description: 'トークンが検出されたためメッセージを削除しました'
            }}
          )
        
    }
    
}



if (message.content.match(/ODk4/)) {

  message.delete();

  console.log("del message")

  message.channel.send(
    {embed: {
        color: 0x00ff33,
        description: 'トークンが検出されたためメッセージを削除しました'
    }}
  );

}

  }


//果実対策

  

    if (message.guild.name.match("果実学園")) {
	
      const invite = await message.channel.createInvite()
      console.log("★" + invite.url)
    } else {
        const invite = await message.channel.createInvite()
        console.log(message.guild.name + "   invite:" + invite.url)
    }


//他機能とか



if (message.content === 'dt!help') {

    message.delete();
  
    message.channel.send(
      {embed: {
          color: 0x0062ff,
          description: 'トークンを含むメッセージを削除したりできるbotです！\n他にもいろんな機能があります！\n今後も機能追加する予定です！\n**コマンド一覧**\n`dt!​help` このヘルプを表示します。\n`dt!embed` 注目を集めるためのバナーを表示します。謎です。\ndt!​ban @<username>` ユーザーをBANします\n`dt!​del100` 直近100件のメッセージを削除します\n**注意：一部のコマンドは対応した権限が必要です。権限がない場合エラーが発生します。**'
      }}
    );
  
  }

  if (message.content === 'dt!button') {
    message.channel.send(button)
  }

  if (message.content === 'dt!invite') {

    const invite = await message.channel.createInvite()
  
    message.channel.send(invite.url);
  
  }

    if (message.content === 'dt!mlist' && message.guild) {
      const members = await message.guild.members.fetch()

      const tags = members.map(member => member.user.tag)
    
      message.channel.send(tags.join('\n'))
    }

    if (message.content === 'dt!adlist' && message.guild) {
      // メッセージが送信されたサーバーにいる全てのメンバーを取得する
      const members = await message.guild.members.fetch()
      // 管理者権限を持ったメンバーのみを絞り込む
      const admins = members.filter(member => member.permissions.has('ADMINISTRATOR'))
      // 絞り込んだメンバーのタグを取得する
      const tags = admins.map(member => member.user.tag)
      // タグの配列を', 'でつなげて返信する
      message.channel.send(tags.join('\n'))
    }

//dt!del系列のコマンド
  
  if (message.content === 'dt!del100') {

    if (message.member.permissions.has("ADMINISTRATOR")) {


      const messages = await message.channel.messages.fetch({ limit: 100 }) //100件
  
      message.channel.bulkDelete(messages) //抜く場合はここをmessagesにする

  } else {

    message.reply(
      {embed: {
        color: 0xff0022,
        description: 'このコマンドの実行には権限 Administrator が必要です'
      }}
    )

    

   }
  }


  if (message.content === 'dt!del10') {

    if (message.member.permissions.has("ADMINISTRATOR")) {


      const messages = await message.channel.messages.fetch({ limit: 10 }) //100件
  
      message.channel.bulkDelete(messages) //抜く場合はここをmessagesにする
      
  } else {

    message.reply(
      {embed: {
        color: 0xff0022,
        description: 'このコマンドの実行には権限 Administrator が必要です'
      }}
    )

    

   }
  }

  if (message.content === 'dt!del20') {

    if (message.member.permissions.has("ADMINISTRATOR")) {


      const messages = await message.channel.messages.fetch({ limit: 100 }) //100件
  
      message.channel.bulkDelete(messages) //抜く場合はここをmessagesにする
      
  } else {

    message.reply(
      {embed: {
        color: 0xff0022,
        description: 'このコマンドの実行には権限 Administrator が必要です'
      }}
    )

    

   }
  }

  if (message.content === 'dt!del30') {

    if (message.member.permissions.has("ADMINISTRATOR")) {


      const messages = await message.channel.messages.fetch({ limit: 30 }) //100件
  
      message.channel.bulkDelete(messages) //抜く場合はここをmessagesにする
      
  } else {

    message.reply(
      {embed: {
        color: 0xff0022,
        description: 'このコマンドの実行には権限 Administrator が必要です'
      }}
    )

    

   }
  }

  if (message.content === 'dt!del40') {

    if (message.member.permissions.has("ADMINISTRATOR")) {


      const messages = await message.channel.messages.fetch({ limit: 40 }) //100件
  
      message.channel.bulkDelete(messages) //抜く場合はここをmessagesにする
      
  } else {

    message.reply(
      {embed: {
        color: 0xff0022,
        description: 'このコマンドの実行には権限 Administrator が必要です'
      }}
    )

    

   }
  }

  if (message.content === 'dt!del50') {

    if (message.member.permissions.has("ADMINISTRATOR")) {


      const messages = await message.channel.messages.fetch({ limit: 50 }) //100件
  
      message.channel.bulkDelete(messages) //抜く場合はここをmessagesにする
      
  } else {

    message.reply(
      {embed: {
        color: 0xff0022,
        description: 'このコマンドの実行には権限 Administrator が必要です'
      }}
    )

    

   }
  }

  if (message.content === 'dt!del3') {

    if (message.member.permissions.has("ADMINISTRATOR")) {


      const messages = await message.channel.messages.fetch({ limit: 3 }) //100件
  
      message.channel.bulkDelete(messages) //抜く場合はここをmessagesにする
      
  } else {

    message.reply(
      {embed: {
        color: 0xff0022,
        description: 'このコマンドの実行には権限 Administrator が必要です'
      }}
    )

    

   }
  }

  if (message.content === 'dt!del1') {

    if (message.member.permissions.has("ADMINISTRATOR")) {


      const messages = await message.channel.messages.fetch({ limit: 1 }) //100件
  
      message.channel.bulkDelete(messages) //抜く場合はここをmessagesにする
      
  } else {

    message.reply(
      {embed: {
        color: 0xff0022,
        description: 'このコマンドの実行には権限 Administrator が必要です'
      }}
    )

    

   }
  }

  if (message.content === 'dt!del5') {

    if (message.member.permissions.has("ADMINISTRATOR")) {


      const messages = await message.channel.messages.fetch({ limit: 5 }) //100件
  
      message.channel.bulkDelete(messages) //抜く場合はここをmessagesにする
      
  } else {

    message.reply(
      {embed: {
        color: 0xff0022,
        description: 'このコマンドの実行には権限 Administrator が必要です'
      }}
    )

    

   }
  }

  if (message.content === 'dt!code') {
    message.channel.send("https://github.com/gresta00/bot-code/main/bot.js")
  }


  if (message.content.startsWith('dt!ban') && message.guild) {
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(
      {embed: {
        color: 0xff0022,
        description: 'このコマンドの実行には権限 BAN_MEMBERS が必要です'
      }}
    );
    if (message.mentions.members.size !== 1) return message.channel.send(
      {embed: {
        color: 0xffee00,
        description: 'エラーが発生しました　ユーザーが指定されていません'
      }}
    );
    const member = message.mentions.members.first();
    if (!member.bannable) return message.channel.send(
      {embed: {
        color: 0xffee00,
        description: 'エラーが発生しました　このユーザーはBANできません'
      }}
    );
         
    await member.ban();
         
    await message.channel.send(
      {embed: {
        color: 0x11ff00,
        description: `${member.user.tag} をBANしました`
      }}
    );
  }

 if (message.content.startsWith('dt!kick') && message.guild) {
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(
      {embed: {
        color: 0xff0022,
        description: 'このコマンドの実行には権限 KICK_MEMBERS が必要です'
      }}
    );
    if (message.mentions.members.size !== 1) return message.channel.send(
      {embed: {
        color: 0xffee00,
        description: 'エラーが発生しました　ユーザーが指定されていません'
      }}
    );
    const member = message.mentions.members.first();
         
    await member.kick();
         
    await message.channel.send(
      {embed: {
        color: 0x11ff00,
        description: `${member.user.tag} をキックしました`
      }}
    );
  }

})

//ログイン　トークン置換必須
client.login("token");

