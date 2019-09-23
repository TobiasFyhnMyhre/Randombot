const discord = require ("discord.js");

var client = new discord.Client();

const token = "NjI1MDM5OTkxNzkzNTE2NTg2.XYjxLw.T-Tc1nNVyXo11ug6kxXErxpiFMg";

client.on ("ready", () => {
    console.log ("ready");

    client.user.setActivity ("Skriv: !sendnudez, !quote");

});

    const prefix = "!";
    client.on ("message", (message) => {
        
        if(message.author.bot) return;

        if(message.content.startsWith (prefix + "hello")) {
            message.reply ("Hi")
        }

        if(message.content.startsWith (prefix + "sendnudez")) {
            number = 4;
            var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            switch (random) {
                case 1: message.channel.send('Here ya go kid, https://i5.walmartimages.com/asr/2079b811-3515-423e-8269-80bed73ae1b1_1.05ca8f7658a1cf98a79088e5e7e075f2.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF'); break;
                case 2: message.channel.send('Here ya go kid, http://images.nubiles.net/galleries2/stalfra/curvy-cuties/08.jpg'); break;
                case 3: message.channel.send('Here ya go kid, http://hosted.showybeauty.com/appleserotica/2489/006.jpg'); break;
                case 4: message.channel.send('Here ya go kid, http://hosted.amourangels.com/gorgeousteen/2489/008.jpg'); break;
            }
        }

        if(message.content.startsWith (prefix + "quote")) {
            number = 4;
            var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            switch (random) {
                case 1: message.channel.send('"Hvis du ikke spiser, dør du" -Oby Toby, 2019.'); break;
                case 2: message.channel.send('"Spis eller dø" -Oby Toby, 2019.'); break;
                case 3: message.channel.send('"Husk at spis" -Oby Toby, 2019.'); break;
                case 4: message.channel.send('"Nej" -Bjørn, 2019.'); break;
            }
        }


    });


    client.login(process.env.BOT_TOKEN);
