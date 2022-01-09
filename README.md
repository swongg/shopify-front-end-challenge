# shopify-front-end-challenge

## About the project
This is my submission to Shopify's Front End Developer Intern Challenge for Summer 2022! 
- [my project](https://shopify-frontend-e475e.web.app/)
- [challenge specifications](https://docs.google.com/document/d/13zXpyrC2yGxoLXKktxw2VJG2Jw8SdUfliLM-bYQLjqE/edit#)


### Features
1) There's a toggle switch component right below the title. Enabling the toggle will add some cool effects to the background! I chose 
floating Shopify-green squares for obvious reasons :)

2) Each photo contains a share button below it (the icon with the 3 connected dots). Clicking on the button will copy the image's url to your clipboard allowing you to easily share the awesome photos with your friends!

3) Images retrieved from the API call are stored in window's local storage so that the user will not need to perform another API call (provided that the contents of the local storage are not cleared) if they re-visit the web application. This feature was implemented to optimize for performance since API calls can be really slow.

4) Each image contains an expand button which reveals more information regarding the photo for the users that want to learn more!

## Screenshot
![image](https://user-images.githubusercontent.com/46267622/148666783-3d9fa0ba-9776-4149-b6e3-a19f0b7aa4e4.png)

## Technologies used:
- React
- Material UI
- JavaScript
- NASA API
- Google Firebase
- [Really cool particles library](https://www.npmjs.com/package/react-tsparticles)
