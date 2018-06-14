import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoadingGlobalService } from './loading-global.service';

@Component({
  selector: 'vox-loading-global',
  templateUrl: './loading-global.component.html',
  styleUrls: ['./loading-global.component.css']
})
export class LoadingGlobalComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public initialStatus: 'show' | undefined;
  public show: boolean;
  private _subscription: Subscription;

  constructor(private loadingGlobalService: LoadingGlobalService) {
  }

  ngOnInit(): void {
    this._subscription = this.loadingGlobalService.loaderState.subscribe(
      (state) => this.show = state.show
    );
  }

  ngOnChanges() {
    if (!!this.initialStatus && this.initialStatus !== 'show') {
      throw new Error('property "initialStatus" can bem only set to "show"');
    }
    this.show = this.initialStatus === 'show' ? true : false;
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
