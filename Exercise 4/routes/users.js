const { v4: uuidv4 } = require('uuid')
const express = require('express')
const router = express.Router()

let usersInfo = [
    {
        id: uuidv4(),
        firstName: "Pekka",
        lastName: "Puupää",
        address: "Tervakatu 1",
        phoneNumber: "048999999199"
    },
    {
        id: uuidv4(),
        firstName: "Pelle",
        lastName: "Peloton",
        address: "Poratie 666",
        phoneNumber: "0490000000111"
    },
    {
        id: uuidv4(),
        firstName: "Musta",
        lastName: "Pekka",
        address: "Sipulitie 15",
        phoneNumber: "059404040404"
    }
];

      router.post('/', (req, res) => {
          console.log(req.body);
      
          usersInfo.push({
              id: uuidv4(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              address: req.body.address,
              phoneNumber: req.body.phoneNumber
          });
          res.sendStatus(201);
      })
      module.exports = router;