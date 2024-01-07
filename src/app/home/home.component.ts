import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements  OnInit {
  @ViewChild('canvas3d', { static: false }) canvasRef!: ElementRef;
  private spline: Application | undefined
  public coin: any

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Zugriff auf das Canvas-Element über die Template-Referenzvariable
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    console.log(this.canvasRef.nativeElement)
    const spline = new Application(this.canvasRef.nativeElement);
    
    spline.load('https://prod.spline.design/H39Q6unHdenPjwRu/scene.splinecode').then(() => {
      this.coin = spline.findObjectByName('coin')
    })
  }

  increasePositionX() {
    
    if (this.coin) {
      this.coin.position.x += 10;
    }
  }

}
