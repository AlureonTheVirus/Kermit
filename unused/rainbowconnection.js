/*
  This script assumes client, discord.js, ffmpeg, and opus are already defined. it also requires a bot token to log in at the bottom (its not in this file) 
*/

// sing rainbow connection --------------------------------------------------------------------------
                client.on("voiceStateUpdate", (oldState, newState) => {
                    if (oldState.channel === null && newState.channel !== null) {
                        if (oldState.member.user.bot) return;
                        console.log("[SCRIPT] a user has joined a VC!");
                        vusers = vusers + 1;
                        console.log(vusers);
                        if (vusers === 1) {
                            console.log("[SCRIPT] there is only one user in a VC, kermit preparing to sing for them!");
                            setTimeout(() => {
                                oldState.member.voice.channel
                                    .join()
                                    .then((VoiceConnection) => {
                                        VoiceConnection.play("RainbowConnection1.mp3").on("finish", () => {
                                            console.log("Rainbow connection has stopped");
                                            VoiceConnection.disconnect();
                                        });
                                    })
                                    .catch((e) => console.log(e));
                            }, singdelay); // ammount of time for Kermit to wait before playing the son
                        }
                    } else {
                        if (oldState.channel !== null && newState.channel === null) {
                            if (oldState.member.user.bot) return;
                            console.log("A user has left the VC!");
                            vusers = vusers - 1;
                            console.log(vusers);
                            if (vusers === 1) {
                                console.log("[SCRIPT] there is only one user in a VC, kermit preparing to sing for them!");
                                setTimeout(() => {
                                    oldState.member.voice.channel
                                        .join()
                                        .then((VoiceConnection) => {
                                            VoiceConnection.play("RainbowConnection1.mp3").on("finish", () => {
                                                VoiceConnection.disconnect();
                                            });
                                        })
                                        .catch((e) => console.log(e));
                                }, singdelay); // ammount of time for Kermit to wait before playing the song
                            }
                        }
                    }
                    // leave channel if nobody is in it
                    if (oldState.channelID !== oldState.guild.me.voice.channelID || newState.channel)
                        return;

                    // otherwise, check how many people are in the channel now
                    if (!oldState.channel.members.size - 1)
                        setTimeout(() => { // if 1 (you), wait five minutes
                            if (!oldState.channel.members.size - 1) // if there's still 1 member,
                                oldState.channel.leave(); // leave
                        }, 600); // (5 min in ms)
           });
