/* global P */

/**
 * 
 * @author jskonst
 * {global P}
 */
function MainView() {
    var self = this
            , model = P.loadModel(this.constructor.name)
            , form = P.loadForm(this.constructor.name, model);
    
    var srv = new P.ServerModule('ServerModule');
    
    
    self.show = function () {
        form.show();
        
    };
    
    // TODO : place your code here
    
    model.requery(function () {
        // TODO : place your code here
    });
    
    form.button.onActionPerformed = function(event) {
        form.txtResult.text = form.ffValA.value + form.ffValB.value;
        var serverCount = srv.demoMethod(form.ffValA.value + form.ffValB.value);
    };

}
