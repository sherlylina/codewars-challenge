// <7 Kyu >
/* <KYU 7> */

class Block {
    constructor(data){
      [this.w, this.l, this.h] = data;
    }
    getWidth(){ return this.w }
    getLength(){ return this.l }
    getHeight(){ return this.h }
    getVolume(){
      let {l, w, h} = this;
      return w*l*h;
    }
    getSurfaceArea(){
      let {l, w, h} = this;
      return 2 * (l*w + l*h + w*h);
    }
  }

  let block = new Block([2,5,9]);
  console.log(block.getHeight())