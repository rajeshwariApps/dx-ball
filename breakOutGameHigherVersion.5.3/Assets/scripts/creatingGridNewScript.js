#pragma strict
var brick :GameObject;
var bricks : GameObject;
var gridArray : GameObject[];
var horizontalBlocks : int;
var verticalBlocks : int;
var startPositionX : float;
var startPositionY : float;
var gapX : float;
var gapY : float;

function Start () 
{
	var xPos : float = startPositionX;
	var yPos : float = startPositionY;

	gridArray = new GameObject[horizontalBlocks * verticalBlocks];

    for(var i= 0; i< gridArray.length ;i++)
    {
        if( i%horizontalBlocks == 0 )
        {
            xPos = startPositionX;
            yPos -= gapY;
            
        }
        gridArray[i]=Instantiate(brick,Vector3(xPos,yPos,0),brick.transform.rotation);
        //gridArray[i].GetComponent<Renderer>().material.SetColor ("_SpecColor", Color.red);
        gridArray[i].name = "brick0"+i;
        //gridArray[i].transform.parent = bricks.transform;
        xPos += gapX;
    }
}


function Update () 
{
	
}

public function allBricksDown()
{
	for(var i= 0; i< gridArray.length ;i++)
    {
	    if(gridArray[i].activeSelf)
	    {
	    	return false;
	    }
	 }
	 return true;
	
}

