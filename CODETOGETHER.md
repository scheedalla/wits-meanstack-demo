Below, are simple tutorials that you can follow to understand the components of this stack.

<b>PART A: Add a phone number as a field</b>

<b>STEP 1</b>

Open the file /app/models/volunteers.js and modify the Mongoose model. Add the phone number the the schema.

<pre>
phone:{type:String, default:'', required:false}
</pre>

Restart node. You can restart by node by using the keyboard commands CTRL + C and re-run the command <pre>node server.js</pre>

<b>STEP 2</b>

Modify the HTML views.
Open the file /views/signup.ejs and add a form element to include the Phone Number as a field

<pre>
&#60;div class="form-group">
  &#60;label>Phone*</label>
  &#60;input type="text" class="form-control" ng-model="newVolunteer.phone" name="title" required/>
&#60;/div>
</pre>

And open the file /views/index.ejs to add the Phone Number as a column to the table. 

