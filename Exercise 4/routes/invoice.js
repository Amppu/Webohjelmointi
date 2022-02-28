const { v4: uuidv4 } = require('uuid')
const express = require('express')
const router = express.Router()
const usersData = require('./users')
const productsData = require('./products')


const invoices = [[]]; 
console.log(productsData);
router.get('/:userId/:invoiceId', (req, res) => {
    let foundIndex = usersData.findIndex(t => t.id === req.params.userId);
    let foundIndexInv = invoices.findIndex[foundIndex];(t => t.id === req.params.invoiceId);
    if(foundIndex === -1){
        res.sendStatus(404);
    }
    else if (foundIndexInv === -1){
        res.sendStatus(404);
    }
    else{
        res.json(invoices[[foundIndexInv][foundIndex]]);
    }
})

router.get('/:userId', (req, res) => {
    
    let foundIndex = usersData.findIndex(t => t.id === req.params.userId);
    if(foundIndex === -1){
        res.sendStatus(404);
    }
    else {
        res.json(invoices[[foundIndex]]);
    }
   
    })
    router.delete('/:userId/:invoiceId', (req,res) => {
      let foundIndex = usersData.findIndex(t => t.id === req.params.userId);
      let foundIndexInv = invoices.findIndex[foundIndex](t => t.id === req.params.invoiceId);

      if(foundIndex === -1){
          res.sendStatus(404);
      }
      else {
            invoices.splice[foundIndex[foundIndexInv]];
            res.sendStatus(202);
      }
      })
      router.post('/:userId', (req, res) => {
          console.log(req.body);
        const sum = invoices.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
          invoices.push({
              id: invoices.length + 1,
              customerId: req.params.userId,
              productsBought: productData.productId, 
              totalSum: sum
              
          });
          res.sendStatus(201);
      })
      
      module.exports = router