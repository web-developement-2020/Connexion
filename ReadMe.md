![ConnexionMockup](connexion_mockup.png)

# CONNEXION
Connexion is a photo sharing social media web app. Built by Kanchan Sharma, Juyean Lee, Lishitha Karnati, and Teal Larson.

We built all aspects of this application, from the databases to the APIs, from the ground up. Features include responsive design, user profiles, media upload and media import, JWTToken authentication, password encryption, image hosting via Cloudinary, like/comment/follow functionality, and more. Data is passed between components utilizing Redux store.

## Video Walkthroughs
- [Client-side walk-through](https://www.youtube.com/watch?v=VjJGImwj6V8)
- [Server-side walk-through](https://youtu.be/yiLIjqIbj2g)


## See it Deployed
Deployed via Heroku at [Connexion App](https://limitless-bayou-76936.herokuapp.com/)

## Installation

Running your own instance of this app will not connect with our users, posts, and profiles databases.  If you would still like to run this app:

1. Clone this repo to your local machine
2. For full functionality you will need to create a keys_dev.js file in the "config" folder containing: 
    - a mongoURI
    - secretOrKey
    - an email smtp
    - a cloudinary cloud name/API Key/API secret.
3. Run <code>npm install</code>
4. Run <code>npm run dev</code>


