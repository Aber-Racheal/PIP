// Step 1: Define data structure for user preferences
const userPreferences = {};
// Step 2: User onboarding
function addUser(userId, preferredCategories) {
    userPreferences[userId] = preferredCategories;
}
// Step 3: Recommendation retrieval
function getRecommendations(userId) {
    const preferredCategories = userPreferences[userId];
    if (!preferredCategories) return [];
 
    console.log(["Recommendation1", "Recommendation2", "Recommendation3"])
    return ["Recommendation1", "Recommendation2", "Recommendation3"];

}
console.log(addUser(20,"shoes"))
getRecommendations()