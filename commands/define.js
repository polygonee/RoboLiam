module.exports = {
  name: "define",
  description:
    "Searches for the word and defines it, providing examples if existant.",
  execute(message, args) {
    console.log("Command begin"); //remove
    async function AsyncFunc(message, args) {
      try {
        console.log("AsyncFunc begin"); //remove
        if (args[1]) {
          console.log("args[1] detected"); //remove
          const { MessageEmbed } = require("discord.js");
          console.log("MessageEmbed defined"); //remove
          const fetch = await require("node-fetch");
          console.log("fetch defined"); //remove
          const response = await fetch(
            `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20200702T031014Z.224775ae6b942b5e.d757485e9a8a4540385b78899c7d21a391e6eb93
          &lang=en-en&text=${args[1]}`,
            {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
            }
          ).then((response) => response.json());
          console.log("response:"); //remove
          console.log(response); //remove
          const Embed = new MessageEmbed()
            .setTitle(response.def[0].text)
            .addField(
              "Definition",
              response.def[0].tr[0].mean.map((def) => def.text).join("\n\n")
            );
          console.log("Embed defined"); //remove
          message.channel.send(Embed);
          console.log("Embed Sent"); //remove
        } else {
          message.channel.send("Please specify a word to define.");
        }
      } catch (err) {
        console.log(err);
      }
    }
    AsyncFunc(message, args);

    const exampleJson = {
      head: {},
      def: [
        {
          text: "time",
          pos: "noun",
          tr: [
            {
              text: "время",
              pos: "существительное",
              syn: [{ text: "раз" }, { text: "тайм" }],
              mean: [{ text: "timing" }, { text: "fold" }, { text: "half" }],
              ex: [
                {
                  text: "prehistoric time",
                  tr: [{ text: "доисторическое время" }],
                },
                { text: "hundredth time", tr: [{ text: "сотый раз" }] },
                { text: "time-slot", tr: [{ text: "тайм-слот" }] },
              ],
            },
          ],
        },
      ],
    };

    exampleJson.def[0].tr[0].mean.map((def) => def.text).join("\n\n");
  },
};
