#pragma strict
var ball : Rigidbody;
var Speed:float = 5;
var xPos: float;
var yPos : float;
var xDirection : float = 1;
var yDirection : float = 1;
var missedBallCounter :int = 0;
var boxDestroyCounter : int = 0;
var score :  UnityEngine.UI.Text;
var winText :  UnityEngine.UI.Text;
var winImageObj :GameObject;
var audi: AudioSource;
var topCol : GameObject;
var downCol : GameObject;
var leftCol : GameObject;
var rightCol : GameObject;
var particleObj : GameObject;
var cam : GameObject;
var gridscript : creatingGridNewScript;


function Start () 
{
	ball = GetComponent.<Rigidbody>();
	xPos = transform.position.x ;
    yPos = transform.position.y;
    winImageObj.SetActive(false);
     audi = GetComponent.<AudioSource>();
     particleObj.gameObject.SetActive(false);
     gridscript = cam.GetComponent(creatingGridNewScript);

}

function Update () 
{
 
    setCountText();
}

function FixedUpdate()
{
	ball.velocity = Vector3( xDirection , yDirection , 0.0f) * Speed * Time.deltaTime;
	Debug.Log(yDirection);
}

function OnCollisionEnter( col : Collision )
{
	particleObj.gameObject.SetActive(false);
 
        if( col.gameObject.name == "bottomBoxCollider")
        {       
            yDirection = -1;
            col.gameObject.transform.parent.gameObject.SetActive(false);
            boxDestroyCounter++;
            audi.Play();
            particleObj.transform.position = col.gameObject.transform.parent.gameObject.transform.position;
             particleObj.gameObject.SetActive(true);
           
           
        }
        else if( col.gameObject.name == "topBoxCollider")
        {       
            yDirection = 1;
			Debug.Log("Yes");
            col.gameObject.transform.parent.gameObject.SetActive(false);
            boxDestroyCounter++;
             audi.Play();
             particleObj.transform.position = col.gameObject.transform.parent.gameObject.transform.position;
             particleObj.gameObject.SetActive(true);
            
           
        }
        else if( col.gameObject.name == "leftBoxCollider")
        {       
			xDirection = -1;
			Debug.Log("Yes");
            col.gameObject.transform.parent.gameObject.SetActive(false);
            boxDestroyCounter++;
             audi.Play();
             particleObj.transform.position = col.gameObject.transform.parent.gameObject.transform.position;
             particleObj.gameObject.SetActive(true);


           
        }
        else if( col.gameObject.name == "rightBoxCollider")
        {       
            
			xDirection = 1;
			Debug.Log("Yes");
            col.gameObject.transform.parent.gameObject.SetActive(false);
            boxDestroyCounter++;
             audi.Play();
             particleObj.transform.position = col.gameObject.transform.parent.gameObject.transform.position;
             particleObj.gameObject.SetActive(true);
              
           
        }
    
    if( col.gameObject.name == "leftWall" )
        {
            xDirection = 1;
        }
    if( col.gameObject.name == "rightWall")
        {
            xDirection = -1;
        }
    if( col.gameObject.name == "roof" )
        {
            yDirection = -1;
        }
    if( col.gameObject.name == "paddle" )
        {
            yDirection = 1;
        }

}

function resetBall()
{
	 this.transform.position= Vector3(xPos,yPos,0);
}

function setCountText()
{
	score.text = "Breakout Score : " + boxDestroyCounter;

	//if (boxDestroyCounter == 45)
	if(gridscript.allBricksDown())
	{
		winImageObj.SetActive(true);
		//winText.text = " You Won! Your Score is :" + boxDestroyCounter ;
	}

}


