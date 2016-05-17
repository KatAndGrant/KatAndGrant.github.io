var firstNameList = ["Stupid", "Lazy", "Horrible", "Bitch", "Twat", "Fucker", "Cunt", "Ido", "Isis", "Douche", "Dummy", "Loser", "Poop"];
var lastNameParts = [
    ["Mc", "Mac", "The ", "", "Van", "Le ", "von "],
    ["Fuck", "Cunt", "Dick", "Penis", "Ido", "Schlong", "Testicle", "Barf", "Poop", "Bitch", "Twat", "Isis", "Douche", "Dummy", "Loser"],
    ["burger", "butt", "face", "tits", "Ido", "pants", "fucker", "nuts", "nozzle", "bucket", "munch"]
];

var insult = document.getElementById('insult');
var button = document.getElementById('button');
var name = "";

var audio = new Audio('drumroll.wav');

button.style.cursor = 'pointer';
var drumroll = function() {
    audio.play();
    setTimeout(buttonFunction, 4250);
}
var buttonFunction = function() {
    name = "";

    var firstNameIndex = Math.floor(Math.random() * firstNameList.length);
    var lastNamePartOneIndex = Math.floor(Math.random() * lastNameParts[0].length);
    var lastNamePartTwoIndex = Math.floor(Math.random() * lastNameParts[1].length);
    var lastNamePartThreeIndex = Math.floor(Math.random() * lastNameParts[2].length);

    name += firstNameList[firstNameIndex] + " ";
    name += lastNameParts[0][lastNamePartOneIndex];
    name += lastNameParts[1][lastNamePartTwoIndex];
    name += lastNameParts[2][lastNamePartThreeIndex];

    insult.innerHTML = name;
};
