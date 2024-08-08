import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

// router.all('/', (req, res, next) => {
//   //   res.json({
//   //     status: 'success',
//   //     message: 'response from all',
//   //   });
//   next();
// });

// let fakeDB = [
//   { id: 3, task: 'sleeping', hr: 40, type: 'entry' },
//   { id: 1, task: 'coding', hr: 40, type: 'entry' },
//   { id: 2, task: 'Eating', hr: 40, type: 'entry' },
// ];

router.get('/', async (req, res, next) => {
  // db.collection.find()

  const tasks = await taskCollection.find();
  res.json({
    status: 'success',
    message: 'response from get',
    // tasks: fakeDB,
    tasks,
  });
});

// database table selection
const taskSchema = new mongoose.Schema({}, { strict: false });
const taskCollection = mongoose.model('Task', taskSchema);

router.post('/', async (req, res, next) => {
  console.log(req.body);

  // fakeDB.push(req.body);
  // console.log(fakeDB);

  // insert task
  const result = await taskCollection(req.body).save();
  console.log(result);

  res.json({
    status: 'success',
    message: 'New Task has been added successfully',
  });
});

router.patch('/', async (req, res, next) => {
  const { _id, ...rest } = req.body;
  console.log(req.body);

  const result = await taskCollection.findByIdAndUpdate(_id, rest, {
    new: true,
  });
  // fakedB = fakeDB.map((item) => {
  //   if (item.id === id) {
  //     item.type = type;
  //     return item;
  //   } else {
  //     return item;
  //   }
  // });
  res.json({
    status: 'success',
    message: 'Task has been updated',
    result,
  });
});

router.delete('/:_id', async (req, res, next) => {
  const { _id } = req.params;
  // console.log(_id);
  // fakeDB = fakeDB.filter((item) => item.id !== +id);
  const result = await taskCollection.findByIdAndDelete(_id);
  res.json({
    status: 'success',
    message: 'response from delete',
    result,
  });
});

export default router;
