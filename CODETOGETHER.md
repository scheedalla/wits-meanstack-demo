Below, are simple tutorials that you can follow to understand the components of this stack.

<b>PART 1: Add a phone number as a field</b>

<b>STEP 2</b>

Open the file /app/models/volunteers.js and modify the Mongoose model. Add the phone number the the schema.

<pre>
phone:{type:String, default:'', required:false}
</pre>

Restart node. You can restart by node by using the keyboard commands CTRL + C and re-run the command <pre>node server.js</pre>

<b>STEP 3</b>
