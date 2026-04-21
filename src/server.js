const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Admin_123',
  database: 'unierikfernandez'
});
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.send("El servidor respon correctament!");
});

//ex1
app.get('/llistaAssigfernandezbueno',() => {
  connection.query('select ASSIG_CODI, ASSIG_NOM FROM assignatures,assignatures_professor,professor,departamen where ASSIG_CODI=ASSIGPROF_ASSIG_CODI AND ASSIGPROF_PROF_DNI = PROF_DNI AND PROF_DEPT_CODI = DEPT_CODI AND DEPT_NOM like "%INFORMATICA%"')

});
//ex2
app.put('/vergefernandezbueno',() => {
  connection.execute('ALTER TABLE alumnes (\n' +
    'ALUMN_VIRGEN INTEGER,\n' +
  ');')
});
//ex3
app.get('/naiDe10fernandezbueno',() =>{
    const nota = 10;
    const alumme = ({
      where: { id_productes: nota }
    });
    res.json(alumme);
});
app.listen(3000, () => console.log('Servidor corrent a http://localhost:3000'));
