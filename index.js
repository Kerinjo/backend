const express = require('express')
const app = express()

let ingredients = [
    {
        "idIngredient": "1",
        "strIngredient": "Chicken",
        "strDescription": "The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. There are more chickens in the world than any other bird or domesticated fowl. Humans keep chickens primarily as a source of food (consuming both their meat and eggs) and, less commonly, as pets. Originally raised for cockfighting or for special ceremonies, chickens were not kept for food until the Hellenistic period (4th–2nd centuries BC).\r\n\r\nGenetic studies have pointed to multiple maternal origins in South Asia, Southeast Asia, and East Asia, but with the clade found in the Americas, Europe, the Middle East and Africa originating in the Indian subcontinent. From ancient India, the domesticated chicken spread to Lydia in western Asia Minor, and to Greece by the 5th century BC. Fowl had been known in Egypt since the mid-15th century BC, with the \"bird that gives birth every day\" having come to Egypt from the land between Syria and Shinar, Babylonia, according to the annals of Thutmose III.",
        "strType": null
    },
    {
        "idIngredient": "253",
        "strIngredient": "Potatoes",
        "strDescription": null,
        "strType": null
    },
    {
        "idIngredient": "10",
        "strIngredient": "Asparagus",
        "strDescription": "Asparagus, or garden asparagus, folk name sparrow grass, scientific name Asparagus officinalis, is a perennial flowering plant species in the genus Asparagus. Its young shoots are used as a spring vegetable.\r\n\r\nIt was once classified in the lily family, like the related Allium species, onions and garlic. However, genetic research places lilies, Allium, and asparagus in three separate families—the Liliaceae, Amaryllidaceae, and Asparagaceae, respectively—with the Amaryllidaceae and Asparagaceae being grouped together in the order Asparagales. Sources differ as to the native range of Asparagus officinalis, but generally include most of Europe and western temperate Asia. It is widely cultivated as a vegetable crop.",
        "strType": null
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1> \
        <p>Go to /api/ingredients to see ingredients.</p>')
})

app.get('/api/ingredients', (request, response) => {
    response.json(ingredients)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
