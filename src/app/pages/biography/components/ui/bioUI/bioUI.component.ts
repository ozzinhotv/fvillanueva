import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { DropdownIconComponent } from '../../../../../shared/ui/dropdown-icon/dropdown-icon.component';

@Component({
  selector: 'app-bio-ui',
  imports: [CommonModule, DropdownIconComponent],
  templateUrl: './bioUI.component.html',
})
export class BioUIComponent {
  @Input() title = '';
  @Input() open = false;
  @Input() contentComponent?: Type<any>;
  @Output() openedChange = new EventEmitter<boolean>();

  onToggle(evt: Event) {
    const isOpen = (evt.target as HTMLDetailsElement).open;
    this.openedChange.emit(isOpen);
  }
}
