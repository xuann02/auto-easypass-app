// Dùng output thay vì env
var required = 1;
var hasMultiple = output.hasMultiple || false;
var requiredText = output.requiredText || "";

if (hasMultiple && requiredText) {
  var match = requiredText.match(/Selected\s+(\d+)\/(\d+)\s+answers/);
  if (match) {
    required = parseInt(match[1]);
  }
}

output.required = required;

console.log("========================================");
console.log("📊 ANSWER LOGIC");
console.log("Has Multiple: " + hasMultiple);
console.log("Required Text: " + requiredText);
console.log("Required: " + required);
console.log("========================================");