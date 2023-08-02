const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const db = require('./Database/mongoose');
const Blog = require('./models/blog');

const PORT = process.env.PORT || 3000;


// app.use(bodyParser.json());

app.use(express.json());

app.post('/blogs', (req, res)=>{
// Using save method 
//    const blog = new Blog(req.body);
//    blog.save().then((blog)=>{
//     res.status(201).send(blog);
//    }).catch((error)=>{
//     res.status(400).send(error);
//    });

// using create method 
// Blog.create(req.body).then((blog)=>{
//      res.status(201).send(blog);
// }).catch((error)=>{
//      res.status(400).send(error);
// })

// using InsertMany method 
Blog.insertMany(req.body).then((blogs)=>{
       res.send(201).send(blogs);
}).catch((error)=>{
       res.send(400).send(error);
})
})

app.get('/', (req, res)=> {
    // using find method 
    Blog.find({}).then((blogs) => {
        res.send(blogs);
    }).catch((error) => {
        res.send(500).send(error);
    })
    
    // using findById method 
    // Blog.findById(req.params.id).then((blog)=>{
    //     if(!blog) {
    //       res.send(404).send();
    //     }
    //     res.send(blog);
    // }).catch((error)=>{
    //     res.send(500).send(error);
    // })
    // using findOne method 
    // Blog.findOne({_id:req.params.id}).then((blog)=>{
    //     if(!blog) {
    //       res.send(404).send();
    //     }
    //     res.send(blog);
    // }).catch((error)=>{
    //     res.send(500).send(error);
    // })
});

app.patch('/blogs/:id', (req, res) => {
    // Blog.findByIdAndUpdate(req.params.id, req.body, {new : true},).then((blog)=>{
    //     if(!blog) {
    //         res.send(404).send();
    //     }
    //     res.send(blog);
    // }).catch((error)=>{
    //     res.send(500).send(error);
    // });
    Blog.findOne({_id : req.params.id}, req.body).then((response)=>{
        res.send(200).send(response);
    }).catch((error)=>{
        res.send(500).send(error);
    })
});

app.delete('/blogs/:id', (req, res) => {
    Blog.findByIdAndDelete(req.params.id).then((blog)=>{
        if(!blog) {
            res.send(400).send();
        }
        res.send(blog);
    }).catch((error)=>{
        res.send(500).send(error)
    });
});

app.listen(PORT, ()=> {
    console.log(`server is listening to the port ${PORT}`);
});