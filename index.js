const express = require('express');
const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/urlShortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => {
    console.log(err);
});

// Schema
const userSchema = new mongoose.Schema({
    ShortUrl: { type: String,
        required: true },
    LongUrl: { type: String,
        required: true },
    NOofClicks: { type: Number,
        default: 0 }
});

// Model
const User = mongoose.model('User', userSchema);

// API to Shorten URL
app.post('/users', async (req, res) => {
    try {
        const { longUrl } = req.body;
        if (!longUrl) return res.status(400).json({ message: 'Long URL is required' });

        const shorturl = nanoid(8);
        const data = new User({ ShortUrl: shorturl, LongUrl: longUrl });
        await data.save();

        return res.status(200).json({ message: `Shortened URL: http://localhost:3000/${shorturl}` });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Redirect Short URL to Original URL & Track Clicks
app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const client = await User.findOne({ ShortUrl: id });

        if (client) {
            client.NOofClicks += 1;
            await client.save();
            return res.redirect(client.LongUrl);
        } else {
            return res.status(404).json({ message: 'Not Found' });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
