import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ElementRef,
  ViewChild,
  OnChanges
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { LoadingModalService } from './loading-modal.service';

@Component({
  selector: 'vox-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.css']
})
export class LoadingModalComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('content') private _content: ElementRef;
  private _subscription: Subscription;
  private _modalOptions: NgbModalOptions;
  private _modalRef: NgbModalRef;

  public show: boolean;
  public textModal: string;
  public title: string;
  @Input() public initialStatus: 'show' | undefined;

  constructor(
    private loadingModalService: LoadingModalService,
    private modalService: NgbModal
  ) {
    this._modalOptions = {};
  }

  ngOnInit(): void {
    this._subscription = this.loadingModalService.loaderState.subscribe(
      state => {
        if (state.show) {
          this.setaConteudo(state);
          this._modalOptions.backdrop = 'static';
          this._modalOptions.keyboard = false;
          this._modalRef = this.modalService.open(this._content, this._modalOptions);
          return;
        }
        this._modalRef.close();
      }
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

  private setaConteudo(state) {
    if (state.content) {
      this.textModal = state.content.message;
      this.title = state.content.title;
    }
  }
}
