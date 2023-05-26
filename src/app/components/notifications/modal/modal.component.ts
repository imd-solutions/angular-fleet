import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'

@Component({
  selector: 'Modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() size?: string = 'md'
  @Input() title?: string = 'Modal Title'
  @Input() icon?: string = ''
  @Input() actionBtn?: string = 'Action'

  @Output() closeEvent = new EventEmitter()
  @Output() submitEvent = new EventEmitter()

  constructor(private element: ElementRef) {}

  close(): void {
    this.element.nativeElement.remove()
    this.closeEvent.emit()
  }

  submit() {
    this.element.nativeElement.remove()
    this.submitEvent.emit()
  }
}
