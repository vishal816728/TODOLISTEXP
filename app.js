const express=require('express')
const app=express()
const bodyParser=require('body-parser')
app.set('view engine','ejs')
var additem=""
var arritem=[]
app.use(bodyParser.urlencoded(P={extended:true}))
app.get("/",(req,res)=>{
    const date=new Date()
    // const day=date.getDay()
    // const arr=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    // if(day==6 || day==0){
    //      var dayname=arr[day]
    //     res.render('list',{kindofday:dayname})
    // }else{
    //     var day2name=arr[day]
    //     res.render('list2',{kindofday:day2name})
    // }
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var today=date.toLocaleDateString("en-Us",options)
    
    res.render('list',{kindofday:today,kindofdata:arritem})
})
app.post('/',(req,res)=>{
    var additem=req.body.additem
    arritem.push(additem)
    //after doing this system will tell kindofdata is not defined
    //to solve this problem we have to send the kindofdata to app.get method so the file does 
    //it know to render both the files static as well as dynamic which will be updated when we give input 
    //after doing that system will tell that additem is not defined
    // this error occurs due to scoping and u know how to solve these kind of errors
    res.redirect('/')
})
app.listen(3000,()=>{
    console.log("rakhta hoon khulla")
})