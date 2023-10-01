# Password Generator Starter Code


## How to View


## The Code


## License



## Sources


## My strategy
  1. create a function getPasswordCriteria
  2.  create a global empty array called criteriaUsed. and a variable called passwordLength.
  3. inside getPasswordCritera ask the user how long the password should be using window.prompt. Ill put this in a function getNum
  4. in get num if type is number more than 8 and less than 128 return the number to passwordLength
     - else use an alert to tell the user the input was invalid
  5. inside getPasswordCriteria ask the user what criteria to use using window.confirm. if yes then add that criteria to criteriaUsed using array.push(criteria).
  6. run a loop with the size being passwordLength
     - randomize the next character from the criteriaUsed
     - each criteria will have it own function to find a random number in its type list.
     - return the full password