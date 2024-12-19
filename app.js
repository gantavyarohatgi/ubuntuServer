const express = require("express");
const app = express();

app.get("/api/hello",(req,res)=>{
res.json({message: "Hi, Gantavya here"});
});

const PORT = 3000;
app.listen(PORT,()=>{
console.log(`Backend is running on http://localhost/:${PORT}`);
});
