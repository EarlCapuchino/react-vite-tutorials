import express from 'express';
import router from './router.js'
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);
app.listen(5000, () => {
    console.log("Listen to port 5000");
})