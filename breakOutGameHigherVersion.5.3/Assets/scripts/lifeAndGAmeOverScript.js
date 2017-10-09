#pragma strict
var lifeText : UnityEngine.UI.Text;
var GameOverText :UnityEngine.UI.Text;
var lives : int= 3;
var ball : GameObject;
var lostTextG :GameObject;
public var endPanel : GameObject;
var alarm : float = 0;
var gapTime : float = 0.08;
var paddle : GameObject;


function Start () 
{
	lostTextG.SetActive(false);

	endPanel.SetActive(false);
}

function Update () 
{
	manageLife();

}

function  manageLife()
{
	if(ball.transform.position.y < -5.6 )
     {
        lives--;
        alarm = Time.time + gapTime;

        //{
        	//ball.transform.position= Vector3(0,-4.5,0);
        	ball.transform.position  = paddle.transform.position;
        	yield WaitForSeconds (5);
        //}
     }
    lifeText.text = "Lives : "+ lives;
    if(lives <= 0)
        {
        //showScoreText.text = "Your Scoer is :" + GameObject.Find("ball").GetComponent("ballBounceScript").boxDestroyCounter;
        //showScoreText.GetComponent<Text>().enabled = true;
        	lostTextG.SetActive(true);
        	endPanel.SetActive(true);

            //GameOverText.text = "Game Over! \n Press Replay Button twice \n to play again";
            Time.timeScale = 0;
        }
}
