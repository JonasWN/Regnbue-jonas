const colours = message => {

  let letter = "";
  let i;

  for (i = 0; i < message.length; i++) {
    const colorPicker = [
      "\x1b[36m",
      "\x1b[33m",
      "\x1b[35m",
      "\x1b[32m",
      "\x1b[34m",
      "\x1b[31m"
    ];

    let numberGenerator = Math.floor(Math.random() * colorPicker.length);

    // each letter a random color from the color picker array - resetes the color to standard at the end
    letter += colorPicker[numberGenerator] + message.charAt(i) + '\x1b[0m'

    if (i == message.length - 1)
      console.log(letter)
  }
};

module.exports = colours;