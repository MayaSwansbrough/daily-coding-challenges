// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

var Ball = function(ballType) {
    this.ballType = ballType || 'regular'
  };