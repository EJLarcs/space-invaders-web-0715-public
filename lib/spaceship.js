function Spaceship (name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  this.docked = true;
  this.phasersCharge = "uncharged";
  if (this.crew.length > 0) {
    this.docked = false;
    for (var i = 0; i < this.crew.length; i++) { this.crew[i].currentShip = this; }
  };

}
//
//
// it('a crew member should return their ship when `currentShip` is called on them', function() {
//   expect(tristan.currentShip).toBe(spaceship);
//   expect(tristan.currentShip.name).toBe('The Krestel');
// });
