# PicBook

A photo gallery web app built with React and Firebase. You can upload images and they show up in a grid on the homepage. Clicking on any image opens it in a fullscreen modal.

This was one of my early projects exploring React hooks, Firebase integration and animations.

---

## What it does

- Upload PNG or JPG images from the browser
- Shows a live upload progress bar while the image is being saved
- Displays all uploaded images in a responsive grid
- Click any image to open it fullscreen, click outside to close
- Responsive navbar that collapses to a hamburger menu on mobile

---

## Built with

- React 17
- Firebase (Firestore + Firebase Storage)
- Framer Motion for animations
- React Router v5

---

## Getting started

You'll need Node.js and a Firebase project set up before running this locally.

```bash
git clone https://github.com/avni-vashisht/PickBook-Master.git
cd PickBook-Master/pic-book-0.1
npm install
```

Then create a `src/Components/firebase/config.js` file with your own Firebase credentials:

```js
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
```

Then start the app:

```bash
npm start
```

---

## Project structure

```
src/
  Components/
    firebase/       # Firebase config (not committed)
    hooks/
      useStorage.js    # handles image upload to Firebase Storage
      useFirestore.js  # real-time listener for images from Firestore
    Pages/
      Home.js          # main page
      Upload.js
      Setting.js
      User.js
      Log-out.js
    ImageGrid.js     # fetches and displays images
    Modal.js         # fullscreen image overlay
    UploadForm.js    # file input with validation
    ProgressBar.js   # animated upload progress
    Navbar.js
    Footer.js
```

---

## Notes

- Only PNG and JPG files are accepted for upload
- The config file is intentionally not included in the repo, you need to add your own Firebase credentials to run it locally
- Some pages (Upload, Settings, User, Log-out) are currently placeholder stubs

---

Made by [Avni Vashisht](https://github.com/avni-vashisht)
