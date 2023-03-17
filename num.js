var readlineSync=require('readline-sync');
var num=readlineSync.question('Enter the number');
switch(num)
{
    case "1":
        console.log('unit');
    break;

    case "10":
        console.log('TEN');
    break;

    case "100":
        console.log('HUNDRED');
    break;

    case "1000":
        console.log('THOUSAND');
    break;

    case "5":
        console.log('TEN THOUSAND');
    break;
}