const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended:true}));
app.get('/', (req,res)=>{
    res.send(`
        <h1>Movie Booking</h1>
        <form action="/book1" method="POST">
        Movie:
        <select name="movie">
            <option value="Interstellar">Interstellar</option>
            <option value="The Dark Knight">The Dark Knight</option>
        </select>
        <br><br>
        Genre:
        <select name="genre">
            <option>Sci-Fi</option>
            <option>Action</option>
        </select>
        <br><br>

        Time:
        <select name="time">
            <option>6 PM</option>
            <option>9 PM</option>
        </select>
        <br><br>
        Customer Name:
        <input type="text" name="customer">
        <br><br>
        seats:
        <input type="text" name="seat">
        <br><br>
        <button type="submit">Book</button>
        </form>
    `);
});
app.post('/book1',(req,res)=>{

    let movie = req.body.movie;
    let genre = req.body.genre;
    let seat = req.body.seat;
    let time = req.body.time;
    let customer = req.body.customer;
    res.send(`
        <h1> booking confirmed</h1>
        movie: ${movie} <br>
        movie: ${seat} <br>
        time: ${time} <br>
        booking id: BK-20260310-0042 <br>
        customer: ${customer}
    `);
});
app.listen(port, ()=>{
    console.log("server started");
});