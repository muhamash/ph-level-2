const path = require("path");
const fs = require("fs");

const inputArgs = process.argv.slice(2);
const text = inputArgs.join(" ").trim();

if (!text) {
    console.log("Please provide a message to log into the terminal.");
    console.log("Example: node index.js hello world or something on your mind!!");
    process.exit(1);
}

const timeStamp = new Date().toISOString();
const logMessage = `${text} - ${timeStamp}\n`;

console.log(logMessage);

const filePath = path.join(__dirname, "log.txt");

fs.appendFile(filePath, logMessage, "utf-8", (err) => {
    if (err) {
        console.error("Failed to write to log file:", err);
        return;
    }
    console.log("Log added!");
});
