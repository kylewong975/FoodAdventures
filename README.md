# food_bar
This is a somewhat lousy attempt to incorporate the classic CS "foo bar" placeholders as puns. This repository is a website that showcases all the restaurants I have tried in various regions and perform analysis on my ratings for each restaurant. 

```
let bar = "bar";
let foo = function(bar) {
  return "foo" + "d" + bar;
}
console.log(foo(bar));
```

### Instructions
To play around with my repository, follow these steps to get started and install the necessary libraries and packages:
- `git clone https://github.com/kylewong975/food_bar.git` to clone my git repo
- `cd food_bar` to go to the root directory of the repo
- `npm install` to install the npm packages 
- `pip install -r requirements.txt` to properly install/configure the Django frameworks with the specified versions
- `./node_modules/.bin/webpack --config webpack.config.js` to configure webpack
- `python3 manage.py runserver` to start the server

In your browser of choice, go to `http://127.0.0.1:8000/` which is the local server hosting the website, which should be indicated when you ran the runserver command above

### Motivation
As a "foodie" I seek out new types of food (cultural, fusion, innovative) food. As a math-oriented person, I love numbers so I quantitatively describe my experience with the food at a particular restaurant by assigning ratings with my criteria. As a CS-oriented person, I would love to store these ratings in a database, parse data into a JSON object, and make a web application that showcases my restaurant reviews!

The first part of the name of the project is relevant because I really love food! Unfortunately, it will be approximately another two years from this time of writing (December 2017) before I can go to any bars. But I will robustly include bar ratings once I become of legal age to go to them!

### Project Features
Project started December 2, 2017
##### Completed
- null
##### TODO
- Landing page
  - Sections to preview what features are available
  - Animations!
- Review page
  - List of restaurants rendered
  - Overall stats (average restaurant rating, number of restaurant reviews posted, etc)
  - Split reviews into pages, default 10
  - Show 10 per, 25 per, 100 per page through a dropdown
  - Set up database parsing and storing date, location, rating (cost, presentation, quality, overall) and review
  - Search functionality
    - Considering restaurant name, location, etc
    - Render "search based on \<category\>" in a sidebar
  - Add categorization via parsing (location, priciness, rating)
  - Robustness of application (if I want to add a new category or feature, it should be relatively easy)
- Analysis page
  - D3 charts

### General Tech Stack
##### Frontend
- HTML
- CSS
- JavaScript
- React.js
##### Backend
- Django
- MongoDB

### Restaurants
[Los Angeles](https://docs.google.com/document/d/1gZes91JndS2bg-lH12M6RvfmoO2G7rEvsr2-X4xmpMA/edit?usp=sharing)
