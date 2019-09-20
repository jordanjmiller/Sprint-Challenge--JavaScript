// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(attrs){
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    calcVolume = function() { return this.length * this.width * this.height };
    calcSurfaceArea = function() { return (2 * (this.length * this.width + this.length * this.height + this.width * this.height))};
}

const obj = new CuboidMaker({
    length: 5,
    width: 15,
    height: 10,
});

console.log(obj.calcVolume());
console.log(obj.calcSurfaceArea());

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.calcVolume()); // 100
console.log(cuboid.calcSurfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker{
    constructor(attrs){
        super(attrs);
        this.length = attrs.length;
        this.width = attrs.length;
        this.height = attrs.length;
    }
    calcCubeVol = () => this.length*this.length*this.length;
    calcCubeSurfaceArea = () => 6 * (this.length * this.length);
}

const cube = new CubeMaker({
    length: 5,
})

console.log(cube);
console.log(cube.calcCubeVol());
console.log(cube.calcVolume());

console.log(cube.calcSurfaceArea());
console.log(cube.calcSurfaceArea());