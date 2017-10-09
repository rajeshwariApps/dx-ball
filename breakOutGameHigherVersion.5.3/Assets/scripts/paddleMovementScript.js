#pragma strict
var paddleSpeed : float =1;
var playerPos :Vector3 = new Vector3(-1.93,-4.9, 0);
var xPos :float ;

function Start () {
	
}

function Update () 
{
	xPos = transform.position.x +(Input.GetAxis("Horizontal")) *paddleSpeed;
    playerPos = new Vector3(Mathf.Clamp(xPos, -6,6), -4.9, 0);
    transform.position = playerPos;
}
