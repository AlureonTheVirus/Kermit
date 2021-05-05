module.exports = {
	name: '8ball',
	description: 'kermit uses his magical abilities to answer your deepest questions',
	execute(message, args) {
                            const messages = [

                                " Dont swipe right, Its your cousin",

                                " you gotta be kidding me",

                                " Do whatever, I dont really care",

                                " Go ask your father",

                                " Sorry thats classified",

                                " No comprende por favor, hable espanol",

                                " You should be ashamed of that question",

                                " It is certain",

                                " It is decidedly so",

                                " Without a doubt",

                                " Yes - definately",

                                " You may rely on it",

                                " As I see it, yes",

                                " Most likely",

                                " Outlook not so good",

                                " Yes",

                                " No",

                                " Kermits sources say no",

                                " NEVER IN A GAJILLION YEARS!!",

                                " Better not tell you now",

                                " No",

                                " Very doubtful",

                                " Ask me again later",

                                " Concentrate really hard and try again",

                                " What do you think it is?",

                                " I was wondering that too",

                                " Only if mullets come back in stlye. . . A yin to the yang",

                                " haha, You thought",

                                " Heck NO!!",

                                " My reply is no",

                                " Why do you ask so many questions?!?!",

                                " Go away, kermit needs sleep",

                                " You would be better off going to medical school",

                                " Ask me if I care",

                                " Outlook: WHAT?!? ARE YOU CRAZY!?!?",

                                " Stop asking stupid Questions!",

                                " Thats none of my buisness",

                                " You wernt supposed to ask that",

                                " 100 BILLION PERCENT.",

                                " Perhaps",

                                " I need to go ask Elmo",

                            ];

                            const randomMessage = messages[Math.floor(Math.random() * messages.length)];

                            message.reply("Kermits 8 ball says:" + randomMessage);

                        }

                    }



},
