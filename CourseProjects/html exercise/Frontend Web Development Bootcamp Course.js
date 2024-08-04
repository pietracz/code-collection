/*JavaScript Variables*/
const yourFirstVariable = "learning to code gives you superpower"; /*String-Variables*/
const yourSecondVariable = 10; /*Number- Variables*/
const yourThirdVariable = {FirstProberty:"hello world"}; /*Object-Variables*/
/*You combine a keyword, a variable and a value to create a line of code, every letter, every space and every symbol is named token.*/ 
const newVariable = 20; /* this line declares a variable and assign a value*/
let anotherVariable; /*you first can declare a variable*/
anotherVariable = 20; /* and assign a value to the variable with the second line*/
let anotherVariable = 20; /*this also declares a variable and assign a value*/
There are 3 primary ways to declare a variable with:
const variable1 = 10; /*is used when we assume a assigned value wont change*/
let variable2 = 10; /*is used when we assume a assigned value will change within the code*/
var variable3 = 10; /*is used when we want to re-assigne a value completly*/

For example var myVariable = 10; declares the variable and sets the value to 10. When we use var myVariable = 20; the value will update and the variable will be re-declared.
The keyword let is used when you expect the value of a variable will change within the code.
For example let counter = 0;
Counter = counter + 1;
When using counter in console you get a 1 printed
Counter++; will do the same as “Counter = counter + 1;”
When now using counter you will get printed a 2.
The const keyword is used when you expect the value of a variable wont change. 
Const lines are often written like: const TAX_RATE = 0.08;
The way the variable is written is more a symantic thing, there are more: 

/*semantic styles*/
const yourFirstVariable2 = 10; /*camel case (recommandation for most companies) */ 
const your_first_variable = 10; /*snake case*/
const YOUR_FIRST_VARIABLE = 10; /* constant case*/
const yourfirstvariable = 10; /*totally lowwer case*/
const YourFirstVariable = 10; /*pascal case*/