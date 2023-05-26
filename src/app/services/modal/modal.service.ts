import { DOCUMENT } from '@angular/common'
import {
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Injector,
  TemplateRef,
} from '@angular/core'
import { Subject } from 'rxjs'
import { ModalComponent } from 'src/app/components/notifications/modal/modal.component'
import { iModalOption } from 'src/app/interface/modal'

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalNotified?: Subject<string>

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(content: TemplateRef<any>, options?: iModalOption) {
    const modalComponentFactory =
      this.resolver.resolveComponentFactory(ModalComponent)
    const contentViewRef = content.createEmbeddedView(null)
    const modalComponent = modalComponentFactory.create(this.injector, [
      contentViewRef.rootNodes,
    ])

    modalComponent.instance.size = options?.size
    modalComponent.instance.title = options?.title
    modalComponent.instance.icon = options?.icon
    modalComponent.instance.actionBtn = options?.actionBtn

    modalComponent.instance.closeEvent.subscribe(() => this.closeModal())
    modalComponent.instance.submitEvent.subscribe(() => this.submitModal())

    modalComponent.hostView.detectChanges()

    this.document.body.appendChild(modalComponent.location.nativeElement)

    this.modalNotified = new Subject()

    return this.modalNotified.asObservable()
  }

  closeModal() {
    this.modalNotified?.complete()
  }

  submitModal() {
    this.modalNotified?.next('confirm')
    this.closeModal()
  }
}
