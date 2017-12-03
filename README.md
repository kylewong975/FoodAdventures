# food_bar
This is a somewhat lousy attempt to incorporate the classic CS "foo bar" placeholders as puns. This repository is a website that showcases all the restaurants I have tried in various regions and perform analysis on my ratings for each restaurant. 

```
let bar = "bar";
let foo = function(bar) {
  return "foo" + "d" + bar;
}
console.log(foo(bar));
```

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