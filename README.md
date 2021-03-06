# Dogs Classifier :dog:

## What is it about?
The app classifies dog's breed based on a picture and shows you other dogs with a similar breed. 

## How to start the app locally?
1. Clone the repo
2. Run "npm install" 
3. Run "npm run start" or "npm start"

## How to use it? 

* push a button on the screen, saying "Press to start"
* upload you picture
* enjoy the preview
* press a button "Classify breed"
* see the result
* enloy other doggies!

# How the project was done? 

## Project board
[Go to the project board](https://github.com/users/NinaV1812/projects/2)

## Wireframe
[Go to the wireframe](https://wireframepro.mockflow.com/view/M07c97f78c36f4f9bb6fd2468283a6d0a1610291674355)

## What technologies were used? 
* [MobileNets by Tensorflow](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet). The library used for the classification itself.
* [Dog API](https://dog.ceo/dog-api/documentation/).
* React and it's hooks as a main framework. 
* Axios (easy to use and supported in all browsers unlike React hooks for fetching data, according to some article).
* Redux for managing the app's global state (It's easy to set up and to maintain with a small app).


## Roadmap:
* better matching between MobileNets ans Dod API (some breeds cannot be found, in this case you won't be able to see gallery of images with other dogs, but you still get your classification results.);
* testing the app;
* add Infinite Scrolling for dogs gallery;
* visual changes such as deleting icon when upload a picture. 


