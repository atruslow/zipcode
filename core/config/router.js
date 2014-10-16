
module.exports = {
    bootstrap: function(app){
        require('../controllers/zipController').controller(app);
    }
};