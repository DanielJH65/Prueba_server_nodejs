var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.getConnection((err,conn) =>{
    conn.query('SELECT * from prueba_pi2021',(err,filas)=>{
      if (err){
        res.json(err);
      }
      console.log(filas)
    });
  });

  res.send('respond with a resource');
});

// Set usuarios

router.post('/nuevo', function(req, res, next){
  var a = req.body;
  req.getConnection((err,conn) =>{
    conn.query('INSERT INTO prueba_pi2021 set ?',[a],(err,filas)=>{
      if (err){
        res.json(err);
      }
      console.log(filas);
      res.send('insertado');
    });
  });
});

router.delete('/borrar/:id', function(req, res, next){
  const { id } = req.params;
  req.getConnection((err,conn) =>{
    conn.query('DELETE FROM prueba_pi2021 WHERE codigo = ?',[id],(err,filas)=>{
      if (err){
        res.json(err);
      }
      res.send('borrado');
    });
  });
});

router.put('/modificar/:id', function(req, res, next){
  const { id } = req.params;
  var a = req.body;
  req.getConnection((err,conn) =>{
    conn.query('UPDATE prueba_pi2021 set ? WHERE codigo = ?',[a,id],(err,filas)=>{
      if (err){
        res.json(err);
      }
      console.log(filas);
      res.send("Modificado")
    });
  });
});

module.exports = router;
