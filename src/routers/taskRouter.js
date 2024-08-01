import express from 'express';

const router = express.Router();

// router.all('/', (req, res, next) => {
//   //   res.json({
//   //     status: 'success',
//   //     message: 'response from all',
//   //   });
//   next();
// });

let fakeDB = [
  { id: 3, task: 'sleeping', hr: 40, type: 'entry' },
  { id: 1, task: 'coding', hr: 40, type: 'entry' },
  { id: 2, task: 'Eating', hr: 40, type: 'entry' },
];

router.get('/', (req, res, next) => {
  res.json({
    status: 'success',
    message: 'response from get',
    tasks: fakeDB,
  });
});
router.post('/', (req, res, next) => {
  //   console.log(req.body);

  fakeDB.push(req.body);
  console.log(fakeDB);

  res.json({
    status: 'success',
    message: 'New Task has been added successfully',
  });
});

router.patch('/', (req, res, next) => {
  //   console.log(req.body);
  const { id, type } = req.body;
  const fakedB = fakeDB.map((item) => {
    if (item.id === id) {
      item.type = type;
      return item;
    } else {
      return item;
    }
  });
  res.json({
    status: 'success',
    message: 'Task has been updated',
  });
});

router.delete('/', (req, res, next) => {
  res.json({
    status: 'success',
    message: 'response from get',
  });
});

export default router;
