"use strict";

class Shell{

  constructor(options){
    this.alive = true;

    this.xPosition = Math.random()*100;
    this.yPosition = Math.random()*100;

    this.$el = $('<div class="shell">');

    this.$el.css({
      width: Math.random()*10 + 'em',
      height: Math.random()*10 + 'em',
      left: this.xPosition + '%',
      top: this.yPosition + '%'
    });

    this.$el.animate({
      width: '0em',
      height: '0em',
    }, { duration: 30000, queue: false });

    setTimeout(()=>{
      this.alive = false;
      this.$el.remove();
    }, 30000);

    this.speed = Math.random() * 500 + 500;

    this._tick();
    this._position();
  }

  _tick(){
    this._drift();
    this._position();
    let nextTick = Math.random()* 500;

    if(this.alive){
      setTimeout( ()=>{
        this._tick();
      }, nextTick);
    }
  }

  _position(){
    this.$el.animate({
      left: this.xPosition+'%',
      top: this.yPosition+'%',
    }, this.speed);
  }

  _drift(){
    this.xPosition += (Math.random()*10 - 5 );
    this.yPosition += (Math.random()*10 - 5 );
  }

  destroy(){
    console.log(this);
    this.$el.remove();
  }

}
