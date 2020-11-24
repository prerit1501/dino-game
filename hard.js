document.addEventListener('DOMContentLoaded',() => {

    const dino = document.querySelector('.dino')
    const grid = document.querySelector('.grid')
    let isMoving = false

    let countObstacles = 0

    function control(e) {   
        if(e.keyCode == 32 ) {
            if(!isMoving) {
                jump()
                isMoving = true
            }

        }

        if(e.keyCode == 17) {
            if(!isMoving) {
                crouch()
                isMoving = true
            }

        }
    }

    document.addEventListener('keyup',control) 

    let position = 300
    function jump() {

        let timerId = setInterval(function() {

            if(position === 420) {
                clearInterval(timerId)
                let downTimerId = setInterval(function() {
                    if(position === 300 ) {
                        dino.style.bottom = 300 + 'px'
                        clearInterval(downTimerId) 
                        isMoving = false

                    }
                    position -=15
                    dino.style.bottom = position + 'px' 
                },30)

            }
            position+=15
            dino.style.bottom = position + 'px'

        },30)
        dino.style.bottom = 300 + 'px'
    }


    function crouch() {

        let timerId = setInterval(function() {

            if(position === 210) {
                clearInterval(timerId)
                let downTimerId = setInterval(function() {
                    if(position === 300 ) {
                        dino.style.bottom = 300 + 'px'
                        clearInterval(downTimerId) 
                        isMoving = false
                    }
                    position +=15
                    dino.style.bottom = position + 'px'
                },30)

            }
            position-=15
            dino.style.bottom = position + 'px'

        },30)
        dino.style.bottom = 300 + 'px'  
    }
    // dino.style.bottom = 300 + 'px'

    function generateObstacles() {

        if(countObstacles === 50) {
            alert("Congrats You Have Reached The Destination")
            // clearInterval()
            // grid.removeChild(obstacle)
            window.location.replace("https://upbeat-knuth-45af27.netlify.app")

            // let lastPos = 10;
            // let lastTimerId = setInterval(function(){

            //     if(lastPos == 1000) {
            //         clearInterval(lastTimerId)
            //     }
            //     dino.style.right = position + 'px'
            //     lastPos += 10
                
    
            // },20)

        }
        countObstacles +=1
        let randomTime = Math.random() * (1000) + 1000;
        let obstaclePosition = 1480
        const obstacle = document.createElement('div')
        
        let whichObstacle = Math.random() * 2;
        // console.log(whichObstacle)
        if(whichObstacle <=1) {
        obstacle.classList.add('drone')
        }   
        else {
            obstacle.classList.add('building')
        }
        grid.appendChild(obstacle)
        obstacle.style.left = obstaclePosition + 'px'

        let timerId = setInterval(function(){

            // console.log(position)
            // console.log(obstaclePosition)
            if(obstacle.classList == 'building')
            {
                if(obstaclePosition > 0 && obstaclePosition < 70 && position >= 0 && position <= 300)
                {
                    clearInterval(timerId)
                    alert("game over")
                    window.location.replace("https://upbeat-knuth-45af27.netlify.app")
                }

                console.log(obstaclePosition)
            }
            else if(obstacle.classList == 'drone')
            {
                if(obstaclePosition > 0 && obstaclePosition < 70 && position >= 300 && position <= 500)
                {
                    clearInterval(timerId)
                    alert("game over")
                    window.location.replace("https://upbeat-knuth-45af27.netlify.app")
                }

            }


            obstaclePosition -=20
            obstacle.style.left = obstaclePosition + 'px'
            

        },20)

        setTimeout(generateObstacles,randomTime)
        
    }

    generateObstacles()



})