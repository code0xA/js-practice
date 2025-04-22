const accountId = 12345
let accountEmail = "anam@google.com"
var accountPassword = "124578"
accountCity = "Jaipur" //can assign variable w/o keyword, not advisbale
let accountState; //value will be 'undefined'

//accountId = 2; //cannot assign to const
accountEmail = "hc@hc.com"
accountPassword = "54321"
accountCity = "Udaipur"
 /*
Avoid using var
due to issue in block and functional scope
 */
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
