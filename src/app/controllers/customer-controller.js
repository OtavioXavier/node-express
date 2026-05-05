let customers = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 40 },
];

class CustomerController {
  index(req, res) {
    return res.status(200).json(customers);
  }

  show(req, res) {
    const id = parseInt(req.params.id);
    const costumer = customers.find((c) => c.id === id);
    const status = costumer ? 200 : 404;
    return res
      .status(status)
      .json(costumer ?? { error: true, message: 'Costumer not found' });
  }

  create(req, res) {
    const { name, age } = req.body;
    const id = customers[customers.length - 1].id + 1;
    const newCostumer = { id, name, age };
    customers.push(newCostumer);
    return res.status(201).json(newCostumer);
  }

  update(req, res) {
    const id = parseInt(req.params.id);
    const { name, age } = req.body;
    const index = customers.findIndex((c) => c.id === id);
    if (index === -1)
      return res
        .status(404)
        .json({ error: true, message: 'Costumer not found' });
    customers[index] = {
      id,
      name,
      age,
    };
    return res.status(200).json(customers[index]);
  }

  destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = customers.findIndex((c) => c.id === id);
    if (index === -1)
      return res
        .status(404)
        .json({ error: true, message: 'Costumer not found' });
    customers.splice(index, 1);
    return res.status(200).json({ message: 'Costumer deleted' });
  }
}

export default new CustomerController();
