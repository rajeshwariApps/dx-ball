/*#pragma strict
var x : GameObject;
var counter = 0;
var se : Unity Engine.ParticleSystem;
function Start () 
{
	
}

function Update () 
{
counter++;
if(counter == 60)
{
	x.GetComponent.<ParticlesystemRenderMode>().Play();
}
if(counter == 120)
{
	x.GetComponent.<ParticlesystemRenderMode>().Stop() ;
	counter = 0;
}

}*/
#pragma strict
private var ps: ParticleSystem;
public var moduleEnabled: boolean;
function Start() {
	ps = GetComponent.<ParticleSystem>();
}
function Update() {
	var emission = ps.emission;
	emission.enabled = moduleEnabled;
	//if(emission.enabled)
	{
	//this.gameObject.SetActive(false);
	}

}
function OnGUI() {
	moduleEnabled = GUI.Toggle(new Rect(25, 45, 100, 30), moduleEnabled, "Enabled");
	this.gameObject.SetActive(false);

}