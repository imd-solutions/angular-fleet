import { Component, Input } from '@angular/core'

@Component({
  selector: 'EventButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title!: string
}
