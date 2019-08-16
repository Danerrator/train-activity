// Initialize Firebase
const config = {
  apiKey: "AIzaSyBhc_5a38hEhu9jC3gjGSLZnUSp5qyqfoA",
  databaseURL: "https://train-activity-b37f7.firebaseio.com",
  authDomain: "train-activity-b37f7.firebaseapp.com",
  projectId: "train-activity-b37f7",
  storageBucket: "train-activity-b37f7.appspot.com"
};
firebase.initializeApp(config);

var database = firebase.database();

//button for adding train
$("#add-train").on("click", function(event) {
  event.preventDefault();
//grabs user input
var trainName = $("#train-name").val().trim();
var destination = $("#destination").val().trim();
var trainTime = $("#train-time").val().trim();
var frequency = $("#frequency").val().trim();

var newTrain = {
  name: trainName,
  destination: destination,
  trainTime: trainTime,
  frequency: frequency
};

database.ref().push(newTrain);

console.log(newTrain.name);
console.log(newTrain.destination);
console.log(newTrain.trainTime);
console.log(newTrain.frequency);


$("#train-name").val("");
$("#destination").val("");
$("#train-time").val("");
$("#frequency").val("");

});

database.ref().on("child_added", function(childSnapshot) {
  //store everything into a variable
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().trainTime;
  var frequency = childSnapshot.val().frequency;


  console.log(trainName);
  console.log(destination);
  console.log(trainTime);
  console.log(frequency);

  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(trainTime),
    $("<td>").text(frequency),
    )

  $("#train-table").append(newRow);
});