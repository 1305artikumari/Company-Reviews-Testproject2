const sequelize = require('../models/seller');

const getSellers = async (req, res) => {
  try {
    const sellers = await sequelize.findAll();
    const search = req.query.search;
    if(search){
      const filteredSellers = sellers.filter(seller => {
        return seller.name.toLowerCase().includes(search.toLowerCase());
      });
      
      res.render('index', { filteredSellers });
    }
    else{
      res.render('index', { filteredSellers: [] });
    }   
  
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching Sellers');
  }
}

const postSellers = async (req, res) => {
  const name = req.body.name;
  const pros = req.body.pros;
  const cons = req.body.cons;
  const rating = req.body.rating;
  console.log(`Name: ${name}, Pros: ${pros}, Cons: ${cons}, Rating: ${rating}`);

  try {
    const seller = await sequelize.create({
      name: name,
      pros: pros,
      cons: cons,
      rating: rating
    });

    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating the Seller');
  }
}

module.exports = { getSellers,  postSellers};