import React from 'react';
import '../Loading/loading.css';
import backgroundImage from "../../img/2.jpg";

const loadingMsgs = [
    "...and enjoy the elevator music...",
    "Please wait while the little elves draw your map",
    "Don't worry - a few bits tried to escape, but we caught them",
    "Would you like fries with that?",
    "Checking the gravitational constant in your locale...",
    "Go ahead -- hold your breath!",
    "...at least you're not on hold...",
    "Hum something loud while others stare",
    "You're not in Kansas any more",
    "The server is powered by a lemon and two electrodes.",
    "Please wait while a larger software vendor in Seattle takes over the world",
    "We're testing your patience",
    "As if you had any other choice",
    "Why don't you order a sandwich?",
    "While the satellite moves into position",
    "keep calm and npm install",
    "The bits are flowing slowly today",
    "Dig on the 'X' for buried treasure... ARRR!",
    "It's still faster than you could draw it",
    "The last time I tried this the monkey didn't survive. Let's hope it works better this time.",
    "My other loading screen is much faster.",
    "Testing on Timmy... We're going to need another Timmy.",
    "Reconfoobling energymotron...",
    "(Insert quarter)",
    "Are we there yet?",
    "Just count to 10",
    "Why so serious?",
    "It's not you. It's me.",
    "Counting backwards from Infinity",
    "Don't panic...",
    "Embiggening Prototypes",
    "Do not run! We are your friends!",
    "Do you come here often?",
    "Warning: Don't set yourself on fire.",
    "We're making you a cookie.",
    "Creating time-loop inversion field",
    "Spinning the wheel of fortune...",
    "Loading the enchanted bunny...",
    "Computing chance of success",
    "I'm sorry Dave, I can't do that.",
    "Looking for exact change",
    "All your web browser are belong to us",
    "All I really need is a kilobit.",
    "I feel like im supposed to be loading something. . .",
    "What do you call 8 Hobbits? A Hobbyte.",
    "Should have used a compiled language...",
    "Is this Windows?",
    "Adjusting flux capacitor...",
    "Please wait until the sloth starts moving.",
    "Don't break your screen yet!",
    "I swear it's almost done.",
    "Let's take a mindfulness minute...",
    "Unicorns are at the end of this road, I promise.",
    "Listening for the sound of one hand clapping...",
    "Keeping all the 1's and removing all the 0's...",
    "Putting the icing on the cake. The cake is not a lie...",
    "Cleaning off the cobwebs...",
    "Making sure all the i's have dots...",
    "We need more dilithium crystals",
    "Where did all the internets go",
    "Connecting Neurotoxin Storage Tank...",
    "Granting wishes...",
    "Time flies when you’re having fun.",
    "Get some coffee and come back in ten minutes..",
    "Where do most superheroes live? Cape Town",
    "What is a superhero's favorite drink? Fruit Punch!",
    "What does Peter Parker tell people when they ask what he does for a living? He's a web designer...",
    "Why didn't Tony Stark like his new assistant? He wasn't Happy!",
    "I am Groot",
    "TODO: Insert elevator music",
    "Still faster than Windows update",
    "Sooooo... Have you seen my vacation photos yet?",
    "Sorry we are busy catching em' all, we're done soon",
    "Patience! This is difficult, you know...",
    "Discovering new ways of making you wait...",
    "Running with scissors...",
    "Reading Terms and Conditions for you.",
    "Shovelling coal into the server",
    "Pushing pixels...",
    "How about this weather, eh?",
    "Go ahead, hold your breath and do an ironman plank till loading complete",
    "Feel free to spin in your chair",
    "Whatever you do, don't look behind you...",
    "Please wait... Consulting the manual...",

];

const Loading = () => {
    let funnyLoading = loadingMsgs[Math.floor(Math.random() * loadingMsgs.length)];

    return (

        <body
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${backgroundImage})`,
                minHeight: "1000px"
            }}
        >
            <div className='loading-html'>{funnyLoading}</div>
        </body>

    )
}

export default Loading;