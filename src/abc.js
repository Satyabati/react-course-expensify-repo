

let user = {
	name: "GFG",
	gfg2(){
        var abc= () => console.log(this) ;
        abc();
    }
	
};

user.gfg2();
