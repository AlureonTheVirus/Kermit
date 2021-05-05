module.exports = {
    name: 'rainbow connection',
    description: 'bot plays rainbow connection for any user sitting in a vc for more than 5 minutes by themselves',
    execute(vusers) {
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
                }, 5 * 60000); // ammount of time for Kermit to wait before playing the son
            }
        }

        //detect if person leaves vc
        client.on("voiceStateUpdate", (oldState, newState) => {
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
                    }, 5 * 60000); // ammount of time for Kermit to wait before playing the song
                }
            }
        });
    },
};
