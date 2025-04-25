const express = require('express');
const fs = require('fs').promises;
const app = express();
app.use(express.json());//midleware to convert incoming data into json


app.get("/", (req, res) => {
    //res.send("Hello express server");
    res.json({ msg: "hi,welcomme to express server" })

})
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name + email + password);
    let arr = [];
    const d1 = await fs.readFile('student.json', { encoding: 'utf-8' });
    arr = JSON.parse(d1);
    let status = arr.find(ele => ele.email == email);
    if (status) {
        res.setHeader('Content-Type', 'application/jsn')
        return res.json({ 'msg': 'user is already registered with this email ' })
    }
    else {
        arr.push({ name, email, password });
        await fs.writeFile('student.json', JSON.stringify(arr));
        res.json({ msg: "user is registered successfully" })
    }

})
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    let arr = [];
    const d1 = await fs.readFile('student.json', { encoding: 'utf-8' });
    arr = JSON.parse(d1);
    let status = arr.find(ele => ele.email == email && ele.password == password);
    if (status) {
        return res.json({ 'msg': 'success' })
    } else {
        res.json({ 'msg': 'invalid user,please login with correct credential' })

    }
})
app.get('/admin/show', async (req, res) => {
    try {
        const d1 = await fs.readFile('student.json', { encoding: 'utf-8' });
        const arr = JSON.parse(d1);
        res.json({ msg: arr });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }


});

app.get("/admin/searchByEmail/:email", async (req, res) => {
    const sid = req.params.email;
    //console.log(sid);
    const d1 = await fs.readFile('student.json', { encoding: 'utf-8' });
    const arr = JSON.parse(d1);
    const studentdata = arr.find(ele => ele.email == sid);
    if (!studentdata) {
        res.json({ msg: "student not found using this email" })
    }
    res.json({ msg: studentdata })

})
app.delete("/admin/deleteByEmail/:email", async (req, res) => {
    const sid = req.params.email;
    let arr = [];
    const d1 = await fs.readFile('student.json', { encoding: 'utf-8' });
    arr = JSON.parse(d1);
    const index=arr.findIndex(ele=>ele.email==sid);
    if(index== -1){
        res.json({ msg: "student not found using this email" })
    }
    arr.splice(index,1);
    fs.writeFile('student.json', JSON.stringify(arr,null,2));
    res.json({ msg: "student deleted successfully" })


})
app.patch("/admin/updateByEmail/:email", async (req, res) => {
    const sid=req.params.email;
    const {name,email}

})

app.listen(3002, () => {
    console.log("Express server is running on" + 3002)
});