const {writeFileSync} = require('fs')
for (let i = 0; i < 100000; i++)
{
    writeFileSync('./content/beegyoshi.txt', `Das a beeeeeg yoshi #${i}\n`, { flag: 'a'})
}