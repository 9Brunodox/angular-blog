import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imgCover:string = ""
  cardTitle:string = ""
  cardDescription:string = ""
  private id:string | null = "0"

  constructor(
    private rout:ActivatedRoute
  ){}
  ngOnInit(): void{
    this.rout.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id.toString() == id)[0]
    
    this.cardTitle = result.title
    this.cardDescription = result.descripition
    this.imgCover = result.photo
  }
}
