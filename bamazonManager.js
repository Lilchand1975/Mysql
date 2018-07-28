var mysql = require("mysql");
var inquirer = require("inquirer");
var quantity;

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "Sanjani03",
  database: "bamazon_db"
});
console.log("Here is the list of hot selling items!");

connection.connect(function(err) {
  if (err) throw err;
  start();
});
  
// function that prompts the user for an action they should take
function start() {
  connection.query("SELECT * FROM products", function (err, result, fields) {
    if (err) throw err;
    for(var i=0; i< result.length;i++){
        console.log("| "+result[i].item_id+" |"+result[i].product_name+" |"+ "$"+result[i].price+" |" + result[i].stock_quantity);
    }
    displayQuestions();
    quantity = result;
  });
}
  function displayQuestions(){
      inquirer.prompt([
        {
          name: "id",
          type: "input",
          message: "Please select an ID of an item you like ", 
        },
        {
          name: "quantity",
          type: "input",
          message: "How many would you like to buy?", 
        }
      ])
        .then(function(answer) {
          console.log(answer);

          let resultIndex = answer.id - 1;
          var boughtQuantity = answer.quantity;
          var availableQuantity = quantity[resultIndex].stock_quantity;
          var remainingQuantity = availableQuantity - boughtQuantity;
        
        if(boughtQuantity > availableQuantity) {
          console.log("your order exceeds the stock!")
        }else{
          console.log("Updating products quantities...\n");
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: remainingQuantity,
              },
              {
                item_id: answer.id,
              }
            ],
            function(err, res) {
              if(res.affectedRows > 0){
                console.log("Order is placed");
              }
            }
          );
      }
    });
  }