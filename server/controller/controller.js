var Studentdb = require('../model/student');
var Parentsdb = require('../model/parents')

exports.createStudent = (req, res) => {
  if(!req.body){
          res.status(400).send({ message : "Content can not be emtpy!"});
          return;
      }
  // new user
  const user = new Studentdb({
      email : req.body.email,
      password : req.body.password,
      pnr : req.body.pnr
  })
  // save user in the database
  user
      .save(user)
      .then(data => {
          res.send(data)
          // res.redirect('/add-user');
      })
      .catch(err =>{
          res.status(500).send({
              message : err.message || "Some error occurred while creating a create operation"
          });
      });

  }



exports.createParents = (req, res) => {
    if(!req.body){
            res.status(400).send({ message : "Content can not be emtpy!"});
            return;
        }

    // new user
    const user = new Parentsdb({
        email : req.body.email,
        password : req.body.password,
        pnr : req.body.pnr
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/regParents');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

    }


exports.findStudent = (req, res)=>{

    if(req.query.pnr){
        const pnr = req.query.pnr;

        Studentdb.findOne({pnr: pnr})
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with pnr "+ pnr})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with pnr " + pnr})
            })
    }
    else{
      res.status(400).send({ message : "Content can not be emtpy!"});
      return;
    }
}

exports.findParents = (req, res)=>{

    if(req.query.pnr){
        const pnr = req.query.pnr;

        Parentsdb.findOne({pnr: pnr})
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with pnr "+ pnr})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with pnr " + pnr})
            })
    }
    else{
      res.status(400).send({ message : "Content can not be emtpy!"});
      return;
    }
}
