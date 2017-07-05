import {JResult} from "./JResult";

export class JTeam {
	constructor(team) {
		console.log('JTeam: constructor: ' + team.name);
		console.log('   stuff.size: ' + team.stuff.length);
		console.log('   team.stuff[0]: ' + team.stuff[0]);
		this.name = "";
		this.nickname = "";
		this.year = "";
		this.filename = "";
		this.helmet = "";
		this.abrv = "";
		this.fumble = 0;

		this.offenseResult = new Array(30);
		for(var i=0; i<30; i++)
		{
			this.offenseResult[i] = new Array(18)
			for(var j=0; j<18; j++)
			{
				this.offenseResult[i][j] = new JResult();
			}
		}

		this.defenseResult = new Array(30);
		for(var i=0; i<30; i++)
		{
			this.defenseResult[i] = new Array(18)
			for(var j=0; j<18; j++)
			{
				this.defenseResult[i][j] = new JResult();
			}
		}
	}
	load(stuff) {
		console.log('JTeam:load: ' + stuff[0])
	}
}
