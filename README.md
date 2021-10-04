# markOne
## Quiz about me

- This Quiz was made using **Node.JS**
- You can send it to your friends to see how well they know you

## Working

- User gives their name => app welcomes the user and the quiz starts
- here we are using `readLineSync` to get the value of user's name as well as the answers
- We will also have a score variable
- We have an list of questions in which each question is an object 
- in each object we have a key and a value 
Example 👇
 ```var questions=[{
  question:"1) Where do I live? :-",
  answer:"Delhi",
},{-----------
}]
```
- simmilarly we will also have a high score list
- We are using a for loop which will take the out the objects from the questions (list)
- then we have a function which will first convert the answer to upper case using `.toUpperCase()`
- then we will check wether the answer entered by the user is right or wrong using `if` and `else` => Conditional Programming
- Then we will incremient the score or decremient the score by 1 if the answer is correct or not
- then we will see if the score is a high score or amongst the high scores or not and inform the user 
- we have also used `CHALK` to add colors

## Resources

[readLineSync](https://www.npmjs.com/package/readline-sync)
[CHALK](https://www.npmjs.com/package/chalk)
