
/*eslint-env browser, jquery*/

/*globals queue io socket:true */
$(document ).ready(function() {
    console.log( "Ready!" );
		initialization();
});

function initialization (){
	//$.mobile.changePage("#ticketPage");
socketConnect();

}


function socketConnect (){

	 socket = io.connect("/");
            /*Initializing the connection with the server via websockets */
          

}
