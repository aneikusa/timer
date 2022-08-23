const args = process.argv.slice(2);

const timer = function(beep) {
  if (!isNaN(beep) && beep > 0) {
    setTimeout(() => {
       process.stdout.write('\x07');
        },
     beep * 1000);
      }
   };

for (let i of args) {
  timer(i);
}