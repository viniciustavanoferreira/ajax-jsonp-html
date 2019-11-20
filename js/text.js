$(document)
    .ready(function(){
        $("button")
            .click(function(){
                $("#mainDiv").html('Loading...')
                $.ajax({
                    url: "https://api.meetup.com/2/cities",
                    dataType: 'jsonp',
                    type: 'GET',
                    success: function(result){
                        $("#mainDiv")
                            .html(JSON.stringify(result))
                    },
                    error: function(result){
                        alert("Something wrong happened.", JSON.stringify(result))

                    }
                    
                })
                
            })

})