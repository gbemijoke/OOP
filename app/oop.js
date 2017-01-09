module.exports = {

car: function (name, model, trailer)
{
	this.name = "General";
    this.model = "GM";
    this.numOfDoors = 4;
    this.numOfWheels = 4;
    this.speed = "0 km/h";
    this.isSaloon = true;

    if (name != undefined)
    {
      this.name = name;
      this.model = model;
      if (name === "Porshe" || name === "Koenigsegg")
      {
        this.numOfDoors = 2;
      }
      else if (trailer === "trailer")

      {
        this.numOfWheels = 8;
        this.isSaloon = false;
      }
    }

    this.drive = function(speed)
    {
      if (speed == 5)
      {
      	this.speed = "250 km/h"
      }
      else if(speed = 7)
      {
      	this.speed = "77 km/h"
      };
      return this;
    }
  }

}