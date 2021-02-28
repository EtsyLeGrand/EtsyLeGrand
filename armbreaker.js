var height = 0, clicks = 0;
        var pushInterval = window.setInterval(downPush, 100);
        DOMContentLoaded = setTimeout(start, 5000);
        var isStarted = false;
        var time;

        async function trigger() {
            if (isStarted) {
                clicks++;
                if (height < 100)
                height += 1;
            
                document.getElementById("bar1").style.height = document.getElementById("bar2").style.height = height + "%";
            }
            if (height >= 100)
            {
                stop();
            }
        }

        function downPush() {
            if (isStarted)
            {
                if (document.body.style.backgroundColor == "black")
                    document.body.style.backgroundColor = "#0d0d0e";
                else
                    document.body.style.backgroundColor = "black";
            }
            /* Remove for testing*/
            if (height > -1)
                document.getElementById("bar1").style.height = document.getElementById("bar2").style.height = (height-=0.4) + "%";
            if (height < 0.5)
                document.getElementById("bar1").style.height = document.getElementById("bar2").style.height = "0%";
            

        }
        function start() {isStarted = true; height = 0; clicks = 0; time = Date.now()}
        function stop()
        {
            document.getElementById("bar1").style.height = document.getElementById("bar2").style.height = "100%";
            document.body.style.backgroundColor = "#0d0d0e";
            time = Date.now() - time;
            if (window.location.href.indexOf("fr") > -1) {
                document.getElementById("main").innerHTML = "Tu as cliqué " + clicks + " fois en " + (time / 1000) + " secondes!"
                document.getElementById("sub").innerHTML = "Ça te fait une moyenne de " + parseFloat((clicks / (time / 1000)).toFixed(2)) + " clics par seconde!";
                document.getElementById("restart").innerHTML = "<br><br>Recommencer?";
            } else {
                document.getElementById("main").innerHTML = "You clicked " + clicks + " times in " + (time / 1000) + " seconds!"
                document.getElementById("sub").innerHTML = "That's an average of " + parseFloat((clicks / (time / 1000)).toFixed(2)) + " clicks per second!";
                document.getElementById("restart").innerHTML = "<br><br>Restart?";
            }
        }
        document.addEventListener("keydown", event => {
            if (event.isComposing || event.key === 13) {
              height = 0; return;
            }
        });