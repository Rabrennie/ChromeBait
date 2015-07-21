String.prototype.jadenify = function() 
{
	//from http://stackoverflow.com/a/7592235
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};


function countInstances(string, word) 
{
   var substrings = string.split(word);
   return substrings.length - 1;
}

function randomAnswer()
{
	var tempAnswer = answers[Math.floor(Math.random()*answers.length)];
	return tempAnswer.jadenify();
}

function generateTitle ()
{
	var tempTitle = titles[Math.floor(Math.random()*titles.length)],
		answerCount = countInstances(tempTitle, "$answer"),
		numCount = countInstances(tempTitle, "$num");

	for (var i = 0; i < answerCount; i++) 
	{
		var tempAnswer = randomAnswer().replace(/\.$/, '');
		tempTitle = tempTitle.replace("$answer", tempAnswer);
	};

	for (var i = 0; i < numCount; i++)
	{
		tempTitle = tempTitle.replace("$num", Math.floor(Math.random()*50));
	}
	

	return tempTitle;
}

function changeTitles()
{
	for (var i = 0; i < buzzClasses.length; i++) 
	{
		$("."+buzzClasses[i]).each(function(x)
		{
			if ($(this).attr("rel:gt_act") == "post/title" && $(this).attr("baited")!="true") 
			{
				$(this).html(generateTitle());
				$(this).attr("baited","true");
			};

		});
	};

	for (var i = 0; i < buzzIds.length; i++) 
	{
		$("#"+buzzIds[i]).html(generateTitle());
	};

	for (var i = 0; i < crackClasses.length; i++) 
	{
		$("."+crackClasses[i]).each(function(x)
		{
				if ($(this).attr("baited")!="true") 
				{
					$(this).html(generateTitle());
					$(this).attr("baited","true");
				};
		});
	};

	for (var i = 0; i < gawkClasses.length; i++) 
	{
		$("."+gawkClasses[i]).each(function(x)
		{
				if ($(this).attr("baited")!="true") 
				{
					$(this).html(generateTitle());
					$(this).attr("baited","true");
				};
		});
	};

}
changeTitles();
window.setInterval(changeTitles, 5000);