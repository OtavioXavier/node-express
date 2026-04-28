import express from 'express';

let custumers = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 40 },
]

const server = express();
server.use(express.json());

server.get("/customers", (req, res) => {
  return res.status(200).json(custumers)
})

server.get("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const costumer = custumers.find(c => c.id === id)
  const status = costumer ? 200 : 404
  return res.status(status).json(costumer ?? { error: true, message: 'Costumer not found' })
})

server.post("/customers", (req, res) => {
  const { name, age } = req.body
  const id = custumers[custumers.length - 1].id + 1 ?? 1
  const newCostumer = { id, name, age }
  custumers.push(newCostumer)
  return res.status(201).json(newCostumer)
})

server.put("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const { name, age } = req.body
  const index = custumers.findIndex(c => c.id === id);
  if (index === -1) return res.status(404).json({ error: true, message: 'Costumer not found' })
  custumers[index] = {
    id,
    name,
    age,
  }
  return res.status(200).json(custumers[index])
})

server.delete("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const index = custumers.findIndex(c => c.id === id);
  if (index === -1) return res.status(404).json({ error: true, message: 'Costumer not found' })
  custumers.splice(index, 1)
  return res.status(200).json({ message: 'Costumer deleted' })
})

server.listen(3000);