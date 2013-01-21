var leftV
var rightV;


function reset()
{
	leftDrop.setFill("");
	rightDrop.setFill("");
	layer.draw();
	resetXY();
}

function resetXY()
{
	trueB.setPosition(trueX, trueY);
	falseB.setPosition(falseX, falseY);
	layer.draw();
} 
function doit()
{
	updateRightandLeft();
	var color;
	if(leftV == 1 && rightV == 1)
	{
		color = "green";
	}
	if(leftV == 1 && rightV == 0)
	{
		color = "red";
	}
	if(leftV == 0 && rightV == 0)
	{
		color = "red";
	}
	if(leftV == 0 && rightV == 1)
	{
		color = "red";
	}
	evalCircle.setFill(color);
	layer.draw();
}

function checkDrop(object)
{
	var mousePos = stage.getMousePosition();

	if((mousePos.x >= 175 && mousePos.x <= 225) && (mousePos.y >= 175 && mousePos.y <= 225))
	{
		doDrop(object, leftDrop);
	}

	else if((mousePos.x >= 375 && mousePos.x <= 425) && (mousePos.y >= 175 && mousePos.y <= 225))
	{
		doDrop(object, rightDrop);
	}

	else
	{
		resetXY(object);	
	}
}

//handles dropping T/F buttons onto dropzones
function doDrop(object, dropZone)
{
	var x = dropZone.getPosition().x;
	var y = dropZone.getPosition().y;
	var color = object.getFill();
	dropZone.setFill(color);
	if(color == "green")
	{
		if(x == leftDrop.x)
		{
			alert("Hi");
		}
		if(x == rightDrop.x)
		{
			alert("right");
		}
	}

	resetXY();
	layer.draw();
}

function updateRightandLeft()
{
	var leftColor;
	var rightColor;
	leftColor = leftDrop.getFill();
	rightColor = rightDrop.getFill();
	if(leftColor == 'red')
	{
		leftV = 0;
	}
	if(leftColor == 'green')
	{
		leftV = 1;
	}
	if(rightColor == 'red')
	{
		rightV = 0;
	}
	if(rightColor == 'green')
	{
		rightV = 1;
	}
}