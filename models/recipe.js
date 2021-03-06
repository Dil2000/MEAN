const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
	id: { type: String, index : { unique :true }},
	name: { type: String, required: true},	
});

const Recipe = mongoose.model("recipe", recipeSchema);

module.exports = Recipe;