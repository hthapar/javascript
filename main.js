document.getElementById('submit-btn').addEventListener('click',validation);
document.getElementById('reset-btn').addEventListener('click',reset);

function validation() {
  	var textAge,Name,Age,textName;
  	Name = (document.getElementById('firstName').value);
  	Age = (document.getElementById('age').value);
 	var pattern1=/[a-z]/;
  	var result=pattern1.test(Name);

	  if(result)
	  {
	    if(Name.length > 8)
	    {
	      textName="Name Limit is 8 Letter Only";
	    }
	    else
	    {
	      textName="Valid";
	    }
	  }
	  else
	  {
	    textName="Invalid";
	  }

  var pattern2=/[0-9]/;
  var result1=pattern2.test(Age);
	  if(result1)
	  {
	    if(Age > 18 && Age < 30)
	    {
	      textAge="valid";
	    }
	    else
	    {
	      textAge="Age Limit 18-30 / Please enter Numeric values ONLY!";
	    }
	  }
	  else
	  {
	    textAge="Invalid";
	  }
    document.getElementById('entrydiv_firstnamePara').innerHTML = textName;
    document.getElementById('entrydiv_agepara').innerHTML = textAge;
}
function reset(){
  document.location.reload();
}