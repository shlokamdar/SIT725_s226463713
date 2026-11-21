var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = process.env.PORT || 3000;

var recipeList = [
    {
        id: 1,
        title: "Cupcakes",
        image: "images/cupcake.png",
        link: "#",
        description: "Soft, fluffy vanilla cupcakes topped with a swirl of buttercream frosting. Great for parties."
    },
    {
        id: 2,
        title: "Crispy Fries",
        image: "images/fries.png",
        link: "#",
        description: "Golden, crispy french fries seasoned with salt. Best served hot with ketchup or mayo."
    },
    {
        id: 3,
        title: "Chocolate Lava Cake",
        image: "images/lavacake.png",
        link: "#",
        description: "Individual chocolate cakes with a warm, molten centre. Best served with a scoop of vanilla ice cream."
    },
    {
        id: 4,
        title: "Margherita Pizza",
        image: "images/pizza.png",
        link: "#",
        description: "Simple Neapolitan pizza topped with tomato sauce, fresh mozzarella and basil leaves."
    }
];

app.get("/api/recipes", (req, res) => {
    res.json(recipeList);
});


app.get("/api/recipes/:id", (req, res) => {
    var recipe = recipeList.find(r => r.id === parseInt(req.params.id));
    if (!recipe) {
        return res.status(404).json({ error: "Recipe not found" });
    }
    res.json(recipe);
});

app.listen(port, () => {
    console.log("App listening to: " + port)
    console.log("Try: http://localhost:" + port + "/api/recipes")
})