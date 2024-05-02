
const userPreferences = {};



function addUser(userId, preferredCategories) {
    userPreferences[userId] = preferredCategories;
}


function getRecommendations(userId) {
    const preferredCategories = userPreferences[userId];
    if (!preferredCategories) return [];
 
    console.log(["Recommendation1", "Recommendation2", "Recommendation3"])
    return ["Recommendation1", "Recommendation2", "Recommendation3"];

}
console.log(addUser(20,"shoes"))
getRecommendations()