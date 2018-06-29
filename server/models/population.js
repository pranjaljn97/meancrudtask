    var mongoose = require("mongoose"),
     Schema = mongoose.Schema,
     objectId = mongoose.Schema.ObjectId;
     
    var popSchema = new Schema({
     _id: { type: objectId, auto: true },
     Year: { type: String, required: true },
     Population: { type: String, required: true },
     GrowthRate: { type: String, required: true },
     Growth: { type: String, required: true }
    });
     
    var pop = mongoose.model('population', popSchema);
    module.exports = pop;