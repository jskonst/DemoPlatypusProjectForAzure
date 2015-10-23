/* global P */

/**
 * 
 * @author jskonst
 * @stateless
 * @public
 */ 
function ServerModule() {
    var self = this, model = P.loadModel(this.constructor.name);
    
    // TODO : place constructor code here
    
    self.execute = function () {
        // TODO : place application code here
    };
    
    self.demoMethod = function(a, b){
      P.Logger.info("Here");
      P.Logger.info(a+b);  
      return (a+b);
    };
}
