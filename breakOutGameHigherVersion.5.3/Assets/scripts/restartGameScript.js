#pragma strict

//var replayButton : UI.Button;

function Start () 
{
}

function Update ()
{

}
function OnGUI()
{
	if(GUI.Button(new Rect(70 ,510,100,50),"Replay"))
	 		{

	 			restarGame();
	 		}
}
function restarGame()
{
	
	SceneManagement.SceneManager.LoadScene("gamescene");
	Time.timeScale = 1;
}