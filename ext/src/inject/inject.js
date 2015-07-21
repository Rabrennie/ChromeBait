console.log($(".lede__link").attr("rel:gt_act"))


function countInstances(string, word) 
{
   var substrings = string.split(word);
   return substrings.length - 1;
}

function randomAnswer()
{
	var tempAnswer = answers[Math.floor(Math.random()*answers.length)];
	return tempAnswer;
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

$(".lede__link").each(function(i){
	if ($(this).attr("rel:gt_act") == "post/title") 
	{
		$(this).html(generateTitle());
	};

});

$(".splash__title-text").each(function(i){

	$(this).html(generateTitle());

});

$("#post-title").html(generateTitle());