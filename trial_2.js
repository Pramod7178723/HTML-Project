function generateRecommendation() {
    var relationship = document.getElementById("relationship").value;
    var resultElement = document.getElementById("result");

    if (relationship === "friend" || relationship === "Friend") {
        recommend = "Dinner Party";
    } else if (relationship === "family") {
        recommend = "Family photo album.";
    } else if (relationship === "partner" || relationship === "girlfriend" || relationship === "Girlfriend") {
        recommend = "Kiss";
    } else if (relationship === "wife" || relationship === "Wife") {
        recommend = "Wedding Photo";
    } else if (relationship === "husband" || relationship === "Husband") {
        recommend = "Samsung s23ultra";
    } else if (relationship === "boyfriend" || relationship === "Boyfriend") {
        recommend = "iphone 15pro max";
    } else if (relationship === "father" || relationship === "Father" || relationship === "papa") {
        recommend = "Car";
    } else if (relationship === "mother" || relationship === "Mother" ) {
        recommend = "Saree";
    } else if (relationship === "sister" || relationship === "Sister") {
        recommend = "Scooty";
    } else if (relationship === "teacher" || relationship === "Teacher") {
        recommend = "Pen";
    } else if (relationship === "uncle") {
        recommend = "Cycle";
    } else {
        recommend = "Novel";
    }
    resultElement.innerHTML="Gift Recommendation: " + recommend;
}









// function generateRecommendation() {
//     var relationship = document.getElementById("relationship").value;
//     var resultElement = document.getElementById("result");

//     if (relationship === "friend") {
//         resultElement.innerHTML = "For your friend, a personalized item like a custom mug could be a great gift!";
//     } else if (relationship === "family") {
//         resultElement.innerHTML = "For your family member, consider a thoughtful book or a family photo album.";
//     } else if (relationship === "partner") {
//         resultElement.innerHTML = "For your partner, a romantic dinner or a weekend getaway could be a wonderful surprise!";
//     } else {
//         resultElement.innerHTML = "Please select a relationship to get a recommendation.";
//     }
// }


// function generateRecommendation() {
//     // Get user input
//     var budget = parseInt(document.getElementById('relationship').value);

//     // Recommendation logic using if-else statements
//     var giftRecommendation = "";

//     if (relationship==="friend") {
//         giftRecommendation = "A personalized greeting card";
//     } else if (relationship==="father") {
//         giftRecommendation = "A small potted plant";
//     } else if (relationship==="mother") {
//         giftRecommendation = "Customized mug or photo frame";
//     } else {
//         giftRecommendation = "A stylish watch";
//     }

//     // Display the recommendation
//     document.getElementById('result').innerHTML = "Recommended Gift: " + giftRecommendation;
// }



// function generateRecommendation() {
//     var recipient = document.getElementById("relationship").value;
//     var recommendations = [
//         "A personalized mug with their name on it.",
//         "A custom-made photo album filled with memories.",
//         "A handwritten letter expressing your feelings.",
//         "A book by their favorite author.",
//         "A spa voucher for a relaxing day.",
//         "A cooking class experience for food enthusiasts."
//     ];

//     var randomIndex = Math.floor(Math.random() * recommendations.length);
//     var recommendation = recommendations[randomIndex];
    
//     document.getElementById("result").innerText = `For ${recipient}: ${recommendation}`;
// }


// let mode = "light";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color);