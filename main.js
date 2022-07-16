const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var data = {
  X: 0,
  Y: 0,
  Direction: '',
  Command: '',
}

var coordinate_obsticle = [[1,4] , [3,5] , [7,4]] ;

//input X coordinate 
const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Please enter value of x: ', (answer) => {
      data.X = answer
      resolve()
    })
  })
}

//input Y coordinate
const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Please enter value of y: ', (answer) => {
      data.Y = answer
      resolve()
    })
  })
}

//input Direction 
const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Please enter direction (North Or South Or West Or East): ', (answer) => {
      data.Direction = answer
      resolve()
    })
  })
}

//input command to do in coordinate 
const question4 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Please enter command: ', (answer) => {
      data.Command = answer
      resolve()
    })
  })
}

//translate commands from earth 
const translate = () => {
  var i = 0 ;
  for (i in data.Command ){
  var y =  parseInt( data.Y);
  var x = parseInt (data.X);

     if (data.Direction == 'north' || data.Direction == 'North'){
      if (data.Command[i] == 'f' || data.Command[i] == 'F'){
        data.Y = y + 1 ;
      }
     if (data.Command[i] == 'b' || data.Command[i] == 'B'){
        data.Y = y - 1 ;
      }
       if (data.Command[i] == 'l' || data.Command[i] == 'L'){ 
        data.Direction = 'West';
      }
       if (data.Command[i] == 'r' || data.Command[i] == 'R'){
        data.Direction = 'East';
      }
      
    }
    else if (data.Direction == 'South' || data.Direction == 'south'){
    
      if (data.Command[i] == 'f' || data.Command[i] == 'F'){
        data.Y = y - 1 ;
      }
      else if (data.Command[i] == 'b' || data.Command[i] == 'B'){
        data.Y = y + 1 ;
      }
      else if (data.Command[i] == 'l' || data.Command[i] == 'L'){ 
        
        data.Direction = 'East';
      }
      else if (data.Command[i] == 'r' || data.Command[i] == 'R'){
        
        data.Direction = 'West';
      }
    }
 
    else if (data.Direction == 'east' || data.Direction == 'East'){
      if (data.Command[i] == 'f' || data.Command[i] == 'F'){
        data.X = x + 1 ;
      }
      else if (data.Command[i] == 'b' || data.Command[i] == 'B'){
        data.X = x - 1 ;
      }
      else if (data.Command[i] == 'l' || data.Command[i] == 'L'){ 
        data.Direction = 'North';
      }
      else if (data.Command[i] == 'r' || data.Command[i] == 'R'){ 
        data.Direction = 'South';
      }
    }

    else if (data.Direction == 'west' || data.Direction == 'West'){
      if (data.Command[i] == 'f' || data.Command[i] == 'F'){
        data.X = x - 1 ;
      }
      else if (data.Command[i] == 'b' || data.Command[i] == 'B'){
        data.X = x + 1 ;
      }
      else if (data.Command[i] == 'l' || data.Command[i] == 'L'){ 
        data.Direction = 'South';
      }
      else if (data.Command[i] == 'r' || data.Command[i] == 'R'){
        data.Direction = 'North';
      }
    }
    if (data.X == 1 && data.Y == 3 || data.X == 3 && data.Y == 4 || data.X == 7 && data.X == 3) {
      console.log ("("+ data.X +","+ data.Y +")"+" "+ data.Direction + " " + "stopped !!");
    } 
}
 console.log({data: data})
}


//callling all functions 
const main = async () => {
  await question1()
  await question2()
  await question3()
  await question4()
  rl.close()
 translate()
  
}

main()



  
