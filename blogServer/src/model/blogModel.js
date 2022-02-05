const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
	title: {
		type:String
	},
    content: {
        type:String
	}
})

const blogs = mongoose.model('blogs',blogSchema)


module.exports = blogs