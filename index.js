// Question.1 Write a JavaScript function that adds two numbers and returns the result.
// const twoSumFunction = (num1, num2) => num1+num2
// const resultOfTwoSum = twoSumFunction(2,90)
// console.log(resultOfTwoSum)

// Question.2 Implement a function that subtracts one number from another and returns the difference.
// const resultOfTwoSubstract = (num1, num2) => num1 - num2;
// console.log(resultOfTwoSubstract(20, 12));

// Question. Create a function that multiplies two numbers and returns the product.
//   const twoNumberMultiple = (num1,num2) => num1*num2;
//   const resultOfTwoNumberMultiple = twoNumberMultiple(12,12)
// console.log(resultOfTwoNumberMultiple);
// Question. Write a JavaScript function to divide one number by another and return the quotient.

// const twoNumberDivider = (num1,num2)=>{
//     const result = num1/num2;
//     return result.toFixed(2)
// }
// console.log(twoNumberDivider(14,3))

// Question:5 You are building a basic calculator app. Create a function calculateCircleArea(radius) that takes a radius as a parameter and calculates the area of a circle. Ensure that the calculated area is rounded to two decimal places. Test your function with a radius of 5 and print the result.

// const calculateCircleArea = r => {
//     const result = Math.PI*Math.pow(r,2)
//     return result.toFixed(2)
// }
// console.log(calculateCircleArea(5))

// Question:6 You are developing a statistics application. Create a function calculateMeanAndMedian(numbers) that takes an array of numbers as input and calculates both the mean and median of the numbers. Implement the median calculation in a way that works for both odd and even-length arrays. Test your function with the array [3, 1, 4, 1, 5, 9, 2, 6, 5] and print the mean and median.

// const calculateMeanAndMedian = (arr) => {
//   arr.sort((a, b) => a - b);
//   const length = arr.length;
//   console.log(arr)
//   const calculateMean = (arr) => {
//     const total = arr.reduce((acc, elm) => acc + elm);
//     const meanResult = total / length;
//     return meanResult.toFixed(2);
//   };
//   const calculateMedian = (arr) => {
//     if (length / 2 == 0) {
//       const resultMedian = (length / 2 + (length / 2 + 1)) / 2;
//       return arr[resultMedian-1];
//     } else {
//       const resultMedian = (length + 1) / 2;
//       return arr[resultMedian-1];
//     }
//   };

//   const calculatedResultOfMean = calculateMean(arr);
//   const calculatedResultOfMedian = calculateMedian(arr);
//   return { calculatedResultOfMean, calculatedResultOfMedian };
// };
// console.log(calculateMeanAndMedian([1.79, 1.61, 2.09, 1.84, 1.96, 2.11, 1.75]));

// Question: You are managing a student database. Create a Map called studentGrades where the keys are student names (strings) and the values are their corresponding grades (numbers). Add three student records: “Alice” got 85, “Bob” got 92, and “Charlie” got 78. Print the grade of “Bob”.

// const studentGrades = new Map();
// studentGrades.set("Alice", 85);
// studentGrades.set("Bob", 92);
// studentGrades.set("charlie", 78);
// console.log(studentGrades.get("charlie"))

// Question: You are building a chat application. Create a Map called userMessages where keys are user objects and values are arrays of messages sent by each user. Implement a function sendMessage(user, message) that adds a new message to the user’s array of messages. Also, implement a function getTotalMessages(user) that returns the total number of messages sent by a user.

// const userMessages = new Map();

// const sendMessage = (user, message) => {
//     let messages = userMessages.get(user);
//     if (!messages) {
//         messages=[]
//         userMessages.set(user,messages)
//     }
//     messages.push(message)
//     return userMessages
// };
// sendMessage("sagar","hii")
// sendMessage("sagar4","hii")
// console.log(sendMessage("sagar","hiill"));
// function getTotalMessages(user) {
//     const messages = userMessages.get(user);
//     return messages.length;
// }
// console.log(getTotalMessages("sagar"));

// Question: You are building a simple to-do list app. Create a Set called tasks to store unique task names. Add the following tasks to the set: “Buy groceries”, “Clean the house”, “Pay bills”, “Buy groceries” (again). Print the number of tasks in the set.

// const tasks = new Set();
// tasks.add("Buy groceries");
// tasks.add("Clean the house");
// tasks.add("Pay bills");
// console.log(tasks.size);

// Question:10 You are developing a social media platform. Users can like posts, and each post can have multiple likes from different users. Create a Set called postLikes to store user IDs who liked a particular post. Implement a function likePost(postId, userId) that adds a user ID to the set of likes for a given post. Additionally, implement a function getLikedPosts(userId) that returns an array of post IDs that a user has liked.

const postLikes = new Set();
function likePost(postId, userId) {
    postLikes.add(userId)
    
}
function getLikedPosts(userId) {
     
}
// Question: Create a WeakMap called userDataCache to store user objects as keys and their corresponding data objects as values. Add two user objects with associated data: “userA” with data object dataA and “userB” with data object dataB. Retrieve and print the data object for “userA.”

// Question: Create a WeakMap called levelScores to store player objects as keys and their scores for each level as values. Implement a function updateScore(player, level, score) that updates the score for a specific player and level. Also, implement a function getHighestScore(player) that returns the highest score achieved by a player across all levels.

// Question: Create a WeakSet called readArticles to store references to article objects that users have read. Add two article objects to the set: “article1” and “article2.” Print the size of the readArticles set.

// Question: Create a WeakSet called userPlaylists to store references to playlist objects created by users. Implement a function addSongToPlaylist(user, playlist, song) that adds a song to a specific user’s playlist. Additionally, implement a function getTotalPlaylists(user) that returns the total number of playlists created by a user.
