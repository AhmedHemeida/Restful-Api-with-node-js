const user =[
    { id:1 ,name :"ali" ,dep:"cs" } ,
    {id:2 ,name :"ahmed" ,dep:"it"} ,
    {id:3 , name: "mohamed" , dep :"is"}
  ] ;


module.exports = class users {

    constructor({name:nm , dep}) {

        this.name=nm ;
        this.dep=dep ;
        this.id=user.length+1 ;
    }
    saveUser(){
        user.push(this) ;
    }

    static fetchAll (){
        return user ;
    }
}

