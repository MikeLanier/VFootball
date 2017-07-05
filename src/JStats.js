export class JStats
{
	points = 0;

	Points(_points)	{ points+=_points; }

	first_downs = 0;

	FirstDown()    {first_downs++;}

	total_yards = 0;
	total_plays = 0;
	total_touchdowns = 0;
	total_safeties = 0;
	total_fumbles = 0;
	total_fumbles_lost = 0;

	TotalYards(yards)
	{
		total_yards+=yards;
		total_plays++;
	}

	TotalPlays()
	{
		total_plays++;
	}

	TotalTouchdowns()   {   total_touchdowns++;    }
	TotalSafeties()     {   total_safeties++;  }

	TotalFumbles(lost)
	{
		total_fumbles++;
		if(lost)    total_fumbles_lost++;
	}

	rush_yards = 0;
	rush_carries = 0;
	rush_touchdowns = 0;
	//rush_fumbles = 0;
	//rush_fumbles_lost = 0;

	Rush(yards)
	{
		rush_yards+=yards;
		rush_carries++;
		TotalYards(yards);
	}

	RushTouchdowns()
	{
		rush_touchdowns++;
		TotalTouchdowns();
	}

	//RushFumble(Boolean lost)
	//{
	//	rush_fumbles++;
	//	if(lost)    rush_fumbles_lost++;
	//	TotalFumbles(lost);
	//}

	pass_yards = 0;
	pass_attempts = 0;
	pass_completions = 0;
	pass_touchdowns = 0;
	//pass_fumbles = 0;
	//pass_fumbles_lost = 0;
	pass_interceptions = 0;
	pass_sacks = 0;

	Pass(yards)
	{
		pass_yards+=yards;
		pass_attempts++;
		pass_completions++;
		TotalYards(yards);
	}

	PassIncomplete()
	{
		pass_attempts++;
	}

	PassTouchdowns()
	{
		pass_touchdowns++;
		TotalTouchdowns();
	}

	//PassFumble(Boolean lost)
	//{
	//	pass_fumbles++;
	//	if(lost)    pass_fumbles_lost++;
	//	TotalFumbles(lost);
	//}

	PassInterception()	{	pass_interceptions++;	}
	Sack() { pass_sacks++; }

	interception_returns = 0;
	interception_return_yards = 0;
	interception_return_touchdowns = 0;
	//interception_return_fumbles = 0;
	//interception_return_fumbles_lost = 0;

	InterceptionReturn(yards)
	{
		interception_returns++;
		interception_return_yards+=yards;
	}

	InterceptionReturnTouchdowns()    { interception_return_touchdowns++; }

	//InterceptionReturnFumble(Boolean lost)
	//{
	//	interception_return_fumbles = interception_return_fumbles.get()+1);
	//	if(lost)    interception_return_fumbles_lost = interception_return_fumbles_lost.get()+1);
	//	TotalFumbles(lost);
	//}

	punts = 0;
	punt_yards = 0;
	punts_returned = 0;
	punts_blocked = 0;

	Punt(yards)
	{
		punts++;
		punt_yards+=yards;
	}

	PuntReturned()  { punts_returned++; }

	PuntBlocked()
	{
		punts_blocked++;
	}

	punt_returns = 0;
	punt_return_yards = 0;
	punt_return_touchdowns = 0;
	//punt_return_fumbles = 0;
	//punt_return_fumbles_lost = 0;

	PuntReturn(yards)
	{
		punt_returns++;
		punt_return_yards+=yards;
	}

	PuntReturnTouchdown()
	{
		punt_return_touchdowns++;
		TotalTouchdowns();
	}

	//PuntReturnFumble(Boolean lost)
	//{
	//	punt_return_fumbles = punt_return_fumbles.get()+1);
	//	if(lost)    punt_return_fumbles_lost = punt_return_fumbles_lost.get()+1);
	//	TotalFumbles(lost);
	//}

	kickoffs = 0;
	kickoff_yards = 0;
	kickoffs_returned = 0;

	Kickoff(yards)
	{
		kickoffs++;
		kickoff_yards+=yards;
	}

	KickoffReturned()   { kickoffs_returned++; }

	kickoff_returns = 0;
	kickoff_return_yards = 0;
	kickoff_return_touchdowns = 0;
	//kickoff_return_fumbles = 0;
	//kickoff_return_fumbles_lost = 0;

	KickoffReturn(yards)
	{
		kickoff_returns++;
		kickoff_return_yards+=yards;
	}

	KickoffReturnTouchdown()    { kickoff_return_touchdowns++; }

	//KickoffReturnFumble(Boolean lost)
	//{
	//	kickoff_return_fumbles = kickoff_return_fumbles.get()+1);
	//	if(lost)    kickoff_return_fumbles_lost = kickoff_return_fumbles_lost.get()+1);
	//	TotalFumbles(lost);
	//}

	fieldgoal_attempts = 0;
	fieldgoals_made = 0;
	fieldgoals_blocked = 0;

	Fieldgoal(made)
	{
		fieldgoal_attempts++;
		if(made)    fieldgoals_made++;
	}

	FieldgoalBlocked()  { fieldgoals_blocked++; }

	extrapoint_attempts = 0;
	extrapoints_made = 0;
	extrapoints_blocked = 0;

	ExtraPoint(made)
	{
		extrapoint_attempts++;
		if(made)    extrapoints_made++;
	}

	ExtraPointBlocked() { extrapoints_blocked++; }

	penalties = 0;
	penalty_yards = 0;

	Penalty(yards)
	{
		penalties++;
		penalty_yards+=yards;
	}

	constructor()
	{
	}

	copy(stats)
	{
		points = stats.points;

		first_downs = stats.first_downs;

		total_yards = stats.total_yards;
		total_plays = stats.total_plays;
		total_touchdowns = stats.total_touchdowns;
		total_safeties = stats.total_safeties;
		total_fumbles = stats.total_fumbles;
		total_fumbles_lost = stats.total_fumbles_lost;

		rush_yards = stats.rush_yards;
		rush_carries = stats.rush_carries;
		rush_touchdowns = stats.rush_touchdowns;
		//rush_fumbles = stats.rush_fumbles;
		//rush_fumbles_lost = stats.rush_fumbles_lost;

		pass_yards = stats.pass_yards;
		pass_attempts = stats.pass_attempts;
		pass_completions = stats.pass_completions;
		pass_touchdowns = stats.pass_touchdowns;
		//pass_fumbles = stats.pass_fumbles;
		//pass_fumbles_lost = stats.pass_fumbles_lost;
		pass_interceptions = stats.pass_interceptions;
		pass_sacks = stats.pass_sacks;

		interception_returns = stats.interception_returns;
		interception_return_yards = stats.interception_return_yards;
		interception_return_touchdowns = stats.interception_return_touchdowns;
		//interception_return_fumbles = stats.interception_return_fumbles;
		//interception_return_fumbles_lost = stats.interception_return_fumbles_lost;

		punts = stats.punts;
		punt_yards = stats.punt_yards;
		punts_returned = stats.punts_returned;
		punts_blocked = stats.punts_blocked;

		punt_returns = stats.punt_returns;
		punt_return_yards = stats.punt_return_yards;
		punt_return_touchdowns = stats.punt_return_touchdowns;
		//punt_return_fumbles = stats.punt_return_fumbles;
		//punt_return_fumbles_lost = stats.punt_return_fumbles_lost;

		kickoffs = stats.kickoffs;
		kickoff_yards = stats.kickoff_yards;
		kickoffs_returned = stats.kickoffs_returned;

		kickoff_returns = stats.kickoff_returns;
		kickoff_return_yards = stats.kickoff_return_yards;
		kickoff_return_touchdowns = stats.kickoff_return_touchdowns;
		//kickoff_return_fumbles = stats.kickoff_return_fumbles;
		//kickoff_return_fumbles_lost = stats.kickoff_return_fumbles_lost;

		fieldgoal_attempts = stats.fieldgoal_attempts;
		fieldgoals_made = stats.fieldgoals_made;
		fieldgoals_blocked = stats.fieldgoals_blocked;

		extrapoint_attempts = stats.extrapoint_attempts;
		extrapoints_made = stats.extrapoints_made;
		extrapoints_blocked = stats.extrapoints_blocked;

		penalties = stats.penalties;
		penalty_yards = stats.penalty_yards;
	}
}
