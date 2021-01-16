require('dotenv').config();
const { Telegraf } = require('telegraf');
const Markap = require('telegraf/markup');
const pc4 = require('./gamesForPc4');
const elsePc4 = require('./gamesForPc4');
const xbox = require('./gamesForXbox_360');
const xbox2 = require('./gamesForXbox_360');
const gameForComp = require('./gamesForComp');
const gameForComp2 = require('./gamesForComp');

const bigmass = pc4.concat(elsePc4);
const rulet = gameForComp.concat(gameForComp2);
const ruletxbox = xbox.concat(xbox2);

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    `
    Привет, ${ctx.message.from.first_name}!
Не знаешь во что погамать? Бот поможет выбрать!
Если у тебя есть какие либо вопросы, или предложения,
обязательно напиши мне в телеграм: 89242382749`,
    Markap.keyboard([
      ['Игры для ps-4', 'Рулетка для ps-4'],
      ['Игры для Xbox 360', 'Рулетка для Xbox 360'],
      ['Игры для ПК', 'Рулетка для ПК'],
    ])
      .resize()
      .extra()
  )
);

bot.start((ctx) => ctx.reply('Welcome!'));
bot.on('sticker', (ctx) => ctx.reply('👍'));

//  GAMES FOR PC-4
bot.hears('Игры для ps-4', (ctx) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < pc4.length; i++) {
    ctx.reply(
      pc4[i],
      Markap.keyboard([['Больше игр для ps-4', 'Выход']])
        .resize()
        .extra()
    );
  }
});

bot.hears('Больше игр для ps-4', (ctx) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < elsePc4.length; i++) {
    ctx.reply(elsePc4[i]);
  }
});

bot.hears('Рулетка для ps-4', (ctx) => {
  // const bigmass = pc4.concat(elsePc4);
  const rand = Math.floor(Math.random() * bigmass.length);
  ctx.reply(
    bigmass[rand],
    Markap.keyboard([['Крутить еще раз для ps-4', 'Выход']])
      .resize()
      .extra()
  );
});

bot.hears('Крутить еще раз для ps-4', (ctx) => {
  // const bigmas = pc4.concat(elsePc4);
  const rand = Math.floor(Math.random() * bigmass.length);
  ctx.reply(
    bigmass[rand],
    Markap.keyboard([['Крутить еще раз для ps-4', 'Выход']])
      .resize()
      .extra()
  );
});

// GAMES FOR XBOX
bot.hears('Игры для Xbox 360', (ctx) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < xbox.length; i++) {
    ctx.reply(
      xbox[i],
      Markap.keyboard([['Больше игр для Xbox 360', 'Выход']])
        .resize()
        .extra()
    );
  }
});

bot.hears('Больше игр для Xbox 360', (ctx) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < xbox2.length; i++) {
    ctx.reply(xbox2[i]);
  }
});

bot.hears('Рулетка для Xbox 360', (ctx) => {
  const rand = Math.floor(Math.random() * ruletxbox.length);
  ctx.reply(
    ruletxbox[rand],
    Markap.keyboard([['Крутить еще раз для Xbox 360', 'Выход']])
      .resize()
      .extra()
  );
});

bot.hears('Крутить еще раз для Xbox 360', (ctx) => {
  const rand = Math.floor(Math.random() * ruletxbox.length);
  ctx.reply(
    ruletxbox[rand],
    Markap.keyboard([['Крутить еще раз для Xbox 360', 'Выход']])
      .resize()
      .extra()
  );
});

// GAMES FOR ПК
bot.hears('Игры для ПК', (ctx) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < gameForComp.length; i++) {
    ctx.reply(
      gameForComp[i],
      Markap.keyboard([['Больше игр для ПК', 'Выход']])
        .resize()
        .extra()
    );
  }
});

bot.hears('Больше игр для ПК', (ctx) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < gameForComp2.length; i++) {
    ctx.reply(gameForComp2[i]);
  }
});

bot.hears('Рулетка для ПК', (ctx) => {
  const rand = Math.floor(Math.random() * rulet.length);
  ctx.reply(
    rulet[rand],
    Markap.keyboard([['Крутить еще раз для ПК', 'Выход']])
      .resize()
      .extra()
  );
});

bot.hears('Крутить еще раз для ПК', (ctx) => {
  const rand = Math.floor(Math.random() * rulet.length);
  ctx.reply(
    rulet[rand],
    Markap.keyboard([['Крутить еще раз для ПК', 'Выход']])
      .resize()
      .extra()
  );
});

bot.hears('Выход', (ctx) => ctx.reply('/start'));

bot.launch();
