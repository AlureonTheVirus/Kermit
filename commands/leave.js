

              if (command === "leave") {
                message.reply("It's been fun! I will be leaving this server in 5 minutes, say your goodbyes (this action cannot be canceled, kermit still has full functionality until the time has passed");
                    console.log('[SCRIPT] preparing to leave server. . .'); setTimeout(() => {
                            console.log('[SCRIPT] leave: WORKING . . .');
                            message.reply("time is up! I will be leaving now, dont worry, you can still see me in other servers!");
                                message.guild.leave(); console.log('[SCRIPT] leave: OK');
                            }, 5 * 60000);
                return;
              }
