import { CommonModule } from '@angular/common';
import { Component, Input, Type } from '@angular/core';
import { DropdownIconComponent } from '../../../../../shared/ui/dropdown-icon/dropdown-icon.component';

@Component({
  selector: 'app-bio-ui',
  imports: [ CommonModule, DropdownIconComponent],
  templateUrl: './bioUI.component.html',
})
export class BioUIComponent {
  @Input() title = '';
  @Input() open = false;
  @Input() contentComponent?: Type<any>;
  @Input() contentInputs?: Record<string, unknown> | null = null;
 }
