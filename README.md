# Lab 5 - Starter
Contributors: Dhruv Agarwal

Expose: https://d6agarwal.github.io/Lab5_Starter_DA/expose.html  

Explore: https://d6agarwal.github.io/Lab5_Starter_DA/explore.html  
1. I believe unit tests can be used to test individuals elements of the message feature such as handling special characters, message length, ensuring errors are raised for undefined behviour amongst other but the problem with unit tests is that they are meant to test one thing at a time and smaller code blocks. To test multiple functionalities at once, unit tests alone would not suffice so they need to be complemented with other tests.   
   
2. I think unit tests make the most sense in this case because the test is very simple and straightforward. A message can either have less than 80 characters, more than 80 characters or exactly characters and we can have unit tests checking for each case and see if it passes for less than 80 characters, throws an error (shows false) for more than 80 characters and also passes for exactly 80 characters since the question said 'more than 80 characters.'


