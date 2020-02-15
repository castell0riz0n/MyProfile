import { Component, OnInit } from '@angular/core';
import { TooltipConfig } from 'ngx-bootstrap/tooltip';
import {
  faCompressAlt,
  faExpandAlt,
  faHome,
  faCogs,
  faTools,
  faProjectDiagram,
  faUserGraduate,
  faAward,
  faGlobeAsia
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  providers: [{ provide: TooltipConfig, useFactory: getAlertConfig }]
})
export class SideBarComponent implements OnInit {

  public collapsed = true;
  colIcon = faCompressAlt;
  homeIco = faHome;
  expIco = faCogs;
  skilIco = faTools;
  projIco = faProjectDiagram;
  eduIco = faUserGraduate;
  certIco = faAward;
  hobIco = faGlobeAsia;
  constructor() { }

  ngOnInit() {
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.colIcon = this.colIcon === faCompressAlt ? faExpandAlt : faCompressAlt;
  }

}
export function getAlertConfig(): TooltipConfig {
  return Object.assign(new TooltipConfig(), {
    placement: 'right',
    container: 'body'
  });
}
