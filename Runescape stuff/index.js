var PickaxePenetration = 0;
var OreHP = OreHardness = MiningLevel = StrengthLevel = DamagePerSwingAverage = LowestDamagePerSwing = HighestDamagePerSwing = OrePrice = 0;
const TTHIT = 2.4; //duration of time it takes to hit ore with a pickaxe in seconds

function setPickaxePenetration(pp){ PickaxePenetration = pp;}
function getPickaxePenetration(){return PickaxePenetration;}

function setOreHP(hp){OreHP = hp;}
function getOreHP(){return OreHP;}

function setOreHardness(oh){OreHardness = oh;}
function getOreHardness(){return OreHardness;}

function setMiningLevel(ml){MiningLevel = ml;}
function getMiningLevel(){return MiningLevel;}

function setStrengthLevel(sl){StrengthLevel = sl/10;}
function getStrengthLevel(){return StrengthLevel;}

function getNetHardness(){return getPickaxePenetration() - getOreHardness();}

function setDamagePerSwingAverage(dpsa){DamagePerSwingAverage = dpsa;}
function getDamagePerSwingAverage(){return DamagePerSwingAverage;}

function setLowestDamagePerSwing(ldps){LowestDamagePerSwing = ldps;}
function getLowestDamagePerSwing(){return LowestDamagePerSwing;}

function setHighestDamagePerSwing(hdps){HighestDamagePerSwing = hdps;}
function getHighestDamagePerSwing(){return HighestDamagePerSwing;}

function setOrePrice(op){OrePrice = op;}
function getOrePrice(){return OrePrice;}

function getTimeToHit(){return TTHIT;}

/*
LowerBound represents the lowest damage the pickaxe can do, and the HigherBound represents the most damage the pickaxe can do
*/
function calculateDamagePerSwing(LowerBound, UpperBound){
    var dpsList = new Array(UpperBound-LowerBound);
    setDamagePerSwingAverage(0);
    for(var i = 0; i<dpsList.length;i++){
        dpsList[i] = getMiningLevel()+getStrengthLevel()+(i+LowerBound)+getNetHardness();
        setDamagePerSwingAverage(dpsList[i]+getDamagePerSwingAverage());
    }
    setDamagePerSwingAverage(getDamagePerSwingAverage()/dpsList.length);
    setLowestDamagePerSwing(dpsList[0]);
    setHighestDamagePerSwing(dpsList[dpsList.length-1]);
}

function calculateGoldPerHour(){
    console.log("Lowest Gold Per Hour: "+(getOrePrice()*((3600/((getOreHP()/getLowestDamagePerSwing())*getTimeToHit()))))+"\n"+
    "Average Gold Per Hour: "+(getOrePrice()*((3600/((getOreHP()/getDamagePerSwingAverage())*getTimeToHit()))))+"\n"+
    "Highest Gold Per Hour: "+(getOrePrice()*((3600/((getOreHP()/getHighestDamagePerSwing())*getTimeToHit()))))+"\n");
}

//runite ore
setOreHP(600);
setOrePrice(4000)
setOreHardness(75);

setMiningLevel(60);
setStrengthLevel(7);
setPickaxePenetration(75);

calculateDamagePerSwing(25,85);
calculateGoldPerHour();

//luminite
setOreHP(380);
setOrePrice(1300)
setOreHardness(50);

calculateDamagePerSwing(25,85);
calculateGoldPerHour();

//iron ore
setOreHP(120);
setOrePrice(221)
setOreHardness(5);

calculateDamagePerSwing(25,85);
calculateGoldPerHour();