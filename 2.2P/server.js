/**
 * SIT725 - Task 2.2P: Express Web Servers
 *
 * Part 1: Simple web server serving a static page from the "public" folder.
 * Part 2: A web service (REST API) that adds two numbers on the server,
 *         plus extra calculator operations (subtract/multiply/divide) via
 *         both GET (query params) and POST (JSON body).
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Allow Express to parse JSON bodies (needed for the POST endpoints)
app.use(express.json());

// Serve the public folder as static files -> http://localhost:3000/
app.use(express.static(path.join(__dirname, 'public')));

/**
 * GET /add?a=5&b=3
 * The minimum requirement from the task sheet: "a web service that allows
 * to add two numbers on the server, e.g. I can call the URL".
 */
app.get('/add', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({
      error: 'Please provide two numbers, e.g. /add?a=5&b=3',
    });
  }

  res.json({ a, b, operation: 'add', result: a + b });
});

/**
 * Extra GET endpoints for a basic calculator, as suggested in the task sheet
 * ("Feel free if you want to add other function such as POST or other
 * calculations of a basic calculator.")
 */
app.get('/subtract', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Please provide two numbers, e.g. /subtract?a=5&b=3' });
  }
  res.json({ a, b, operation: 'subtract', result: a - b });
});

app.get('/multiply', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Please provide two numbers, e.g. /multiply?a=5&b=3' });
  }
  res.json({ a, b, operation: 'multiply', result: a * b });
});

app.get('/divide', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Please provide two numbers, e.g. /divide?a=10&b=2' });
  }
  if (b === 0) {
    return res.status(400).json({ error: 'Cannot divide by zero' });
  }
  res.json({ a, b, operation: 'divide', result: a / b });
});

/**
 * POST /calculate
 * Body: { "a": 5, "b": 3, "op": "add" | "subtract" | "multiply" | "divide" }
 *
 * This demonstrates the POST method alongside GET, as mentioned in the
 * task sheet's optional extension.
 */
app.post('/calculate', (req, res) => {
  const { a, b, op } = req.body;
  const numA = Number(a);
  const numB = Number(b);

  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    return res.status(400).json({ error: 'Body must include numeric "a" and "b"' });
  }

  let result;
  switch (op) {
    case 'add':
      result = numA + numB;
      break;
    case 'subtract':
      result = numA - numB;
      break;
    case 'multiply':
      result = numA * numB;
      break;
    case 'divide':
      if (numB === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
      }
      result = numA / numB;
      break;
    default:
      return res.status(400).json({
        error: '"op" must be one of: add, subtract, multiply, divide',
      });
  }

  res.json({ a: numA, b: numB, operation: op, result });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/add?a=5&b=3`);
});