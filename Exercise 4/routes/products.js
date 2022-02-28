const { v4: uuidv4 } = require('uuid')
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


let productsData = [
    {
        id: uuidv4(),
        prodName: "Banaani",
        manufacturer: "Chiquita",
        category: "Hedelmät",
        description: "Mahassa porisevaa",
        price: 1.49 
    },
    {
        id: uuidv4(),
        prodName: "Omena",
        manufacturer: "Royal Gala",
        category: "Hedelmät",
        description: "Suussa sulavaa",
        price: 2.19 
    },
    {
        id: uuidv4(),
        prodName: "Ruisjauho",
        manufacturer: "Myllyn Paras",
        category: "Hiutaleet",
        description: "Velliä naamaan",
        price: 0.89
    },
    {
        id: uuidv4(),
        prodName: "Kinkku",
        manufacturer: "Snellman",
        category: "Leikkeleet",
        description: "Leivän päälle",
        price: 2.39
    }
];

router.get('/', (req, res) => {
    
    res.json(productsData);
})

router.get('/search', (req, res) => {
    
    const name = req.query.name;
    const manufacturer = req.query.manufacturer;
     const category = req.query.category;

     let searchParams = {
         'name':name,
         'manufacturer':manufacturer,
         'category':category 
     };
    
     let filterProdsbyName = productsData.filter(product => product.prodName.toLowerCase().includes(searchParams.name));
     let filterProdsbyManu = productsData.filter(product => product.manufacturer.toLowerCase().includes(searchParams.manufacturer));
     let filterProdsbyCat = productsData.filter(product => product.category.toLowerCase().includes(searchParams.category));
     
     let filteredAll = [];


     if(filterProdsbyName.length > 0) {
        filteredAll=filteredAll.concat(filterProdsbyName);
        
             if(filterProdsbyManu.length > 0) {
         filteredAll=filteredAll.concat(filterProdsbyManu);
        
    
            if(filterProdsbyCat.length > 0) {
        filteredAll=filteredAll.concat(filterProdsbyCat);
        }}}
        filteredAll = filteredAll.filter((element, index)=> { return filteredAll.indexOf(element)===index;})
    res.json(filteredAll);
})
   
     
router.get('/:productId', (req, res) => {
    
    let foundIndex = productsData.findIndex(t => t.id === req.params.productId);
    
    if(foundIndex === -1){
        res.sendStatus(404);
    }
    else {
        res.json(productsData[foundIndex]);
    }
    
    })
    router.delete('/:productId', (req,res) => {
      let foundIndex = productsData.findIndex(t => t.id === req.params.productId);
      if(foundIndex === -1){
          res.sendStatus(404);
      }
      else {
        productsData.splice(foundIndex, 1);
          res.sendStatus(202);
      }
      })
      router.post('/', (req, res) => {
          console.log(req.body);
      
          productsData.push({
              id: uuidv4(),
              name: req.body.name,
              manufacturer: req.body.manufacturer,
              category: req.body.category,
              description: req.body.description,
              price: req.body.price
          });
          res.sendStatus(201);
         
      router.put('/:productId', (req, res) => {
      let foundProduct = productsData.find(t => t.id === req.params.productId);
          if(foundProduct) {
              foundProduct.name = req.body.name;
              foundProduct.manufacturer = req.body.manufacturer;
              foundProduct.category = req.body.category;
              foundProduct.description = req.body.description;
              foundProduct.price = req.body.price;
              res.sendStatus(202);
          }
          else {
              res.sendStatus(404);
          }
      })
      module.exports.productsData = productsData;
      module.exports = router
    })
