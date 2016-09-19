var mongoose = require('mongoose');

/*
 * 一个模式（schema）是你的MongoDB数据库中的数据的一个表示，
 * 你能强迫某些字段必须为特定的类型，甚至决定该字段是否必需、唯一或者仅包含指定的元素。
 */
var characterSchema = new mongoose.Schema({
    characterId: { type: String, unique: true, index: true },
    name: String,
    race: String,
    gender: String,
    bloodline: String,
    wins: { type: String, default:0 },
    losses: { type: Number, default: 0 },
    reports: { type: Number, default: 0},
    random: { type: [Number], index: '2d'},
    voted: { type: Boolean, default: false }
});

/*
 * 和抽象的模式相比，一个模型（model）是和实践更接近的对象，包含添加、删除、查询、更新数据的方法，
 * 我们创建了一个Character模型并将它暴露出来。
 */
module.exports = mongoose.module('Character', characterSchema);